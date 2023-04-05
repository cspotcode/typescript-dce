import esbuild from "esbuild";
import {readFileSync, writeFileSync} from 'fs';
import {Project, SyntaxKind, ts, createWrappedNode} from 'ts-morph';
import * as terser from 'terser';
import * as prettier from 'prettier';

const taskOptions = {
    exportIsTsObject: false,
    treeShaking: true
};
const getOptions = async (entrypoint, outfile) => {
    /** @type {esbuild.BuildOptions} */
    const options = {
        entryPoints: [entrypoint],
        banner: { js: '/*mybanner*/' },
        bundle: true,
        outfile,
        platform: "node",
        target: "es2018",
        format: "esm",
        sourcemap: "linked",
        sourcesContent: false,
        treeShaking: taskOptions.treeShaking,
        packages: "external",
        logLevel: "warning",
        // legalComments: "none", // If we add copyright headers to the source files, uncomment.
    };

    if (taskOptions.exportIsTsObject) {
        // We use an IIFE so we can inject the footer, and so that "ts" is global if not loaded as a module.
        options.format = "iife";
        // Name the variable ts, matching our old big bundle and so we can use the code below.
        options.globalName = "ts";
        // If we are in a CJS context, export the ts namespace.
        options.footer = { js: `\nif (typeof module !== "undefined" && module.exports) { module.exports = ts; }` };

        // esbuild converts calls to "require" to "__require"; this function
        // calls the real require if it exists, or throws if it does not (rather than
        // throwing an error like "require not defined"). But, since we want typescript
        // to be consumable by other bundlers, we need to convert these calls back to
        // require so our imports are visible again.
        //
        // The leading spaces are to keep the offsets the same within the files to keep
        // source maps working (though this only really matters for the line the require is on).
        //
        // See: https://github.com/evanw/esbuild/issues/1905
        options.define = { require: "$$require" };
        options.plugins = [
            {
                name: "fix-require",
                setup: (build) => {
                    build.onEnd(async () => {
                        let contents = await fs.promises.readFile(outfile, "utf-8");
                        contents = contents.replace(/\$\$require/g, "  require");
                        await fs.promises.writeFile(outfile, contents);
                    });
                },
            }
        ];
    }

    return options;
};

esbuild.buildSync(await getOptions('./shake-sandbox.js', './shake-sandbox-out.js'));

esbuild.buildSync(await getOptions('./entrypoint.js', './out.mjs'));

let out = readFileSync('./out.mjs', 'utf8');
out = out

    .replace(/\nvar Parser;/, '\n/* @__PURE__*/')
    .replace('})(Parser || (Parser = {}));', '})({});')

    .replace(/\nvar IncrementalParser;/, '\n/* @__PURE__*/')
    .replace('})(IncrementalParser || (IncrementalParser = {}));', '})({});')

    .replace(/\nvar BuilderState;/, '\n/* @__PURE__*/')
    .replace('})(BuilderState || (BuilderState = {}));', '})({});')

    .replace(/\nvar JSDocParser;/, '\n/* @__PURE__*/')
    .replace('})(JSDocParser || (JSDocParser = {}));', '})({});')

    .replace(/\nvar tracingEnabled;/, '\n/* @__PURE__*/')
    .replace('})(tracingEnabled || (tracingEnabled = {}));', '})({});')
    .replace(/\nvar (startTracing|dumpTracingLegend) = .*?(?=\n)/g, '\n')

    // .replaceAll('= createNodeFactory(', '= /* @__PURE__ */createNodeFactory(')
    // .replaceAll('= createBinder(', '= /* @__PURE__ */createBinder(')
    // .replaceAll('= createBracketsMap(', '= /* @__PURE__ */createBracketsMap(')

    // Mark all var foo = create.*( as pure
    // .replace(/^(var [a-zA-Z0-9]+ = )(create[a-zA-Z0-9]+\()/gm, '$1/* @__PURE__ */$2')

    // Mark all `var foo =` as pure
    // .replace(/(\nvar [a-zA-Z0-9]+ = )/g, '$1/* @__PURE__ */')
    
    .replace(/\b(tryGetWebPerformanceHooks|tryGetNodePerformanceHooks)\(/g, '/* @__PURE__ */$1(');

{
const project = new Project({ compilerOptions: { outDir: "dist", declaration: true } });
const sf = project.createSourceFile("out.mjs", out, {overwrite: true});
sf.transform((t) => {
    const node = t.visitChildren();
    // if(
    //     t.currentNode?.parent?.parent?.parent?.parent &&
    //     ts.isVariableDeclaration(t.currentNode.parent) &&
    //     ts.isVariableDeclarationList(t.currentNode.parent.parent) &&
    //     ts.isVariableStatement(t.currentNode.parent.parent.parent) &&
    //     ts.isSourceFile(t.currentNode.parent.parent.parent.parent)
    // ) {
    if(
        node?.parent?.parent?.parent?.parent &&
        ts.isVariableDeclaration(node.parent) &&
        node.parent.initializer === node &&
        ts.isVariableDeclarationList(node.parent.parent) &&
        ts.isVariableStatement(node.parent.parent.parent) && 
        ts.isSourceFile(node.parent.parent.parent.parent)
    ) {
        const declStatement = createWrappedNode(node.parent.parent.parent);

        const replacement = t.factory.createCallExpression(
            t.factory.createArrowFunction(
                undefined, undefined, [], undefined, undefined, 
                node
            )
        );
        return t.factory.createIdentifier(
            '/* @__PURE__ */(() => (' + node.getText() + '))()'
        );
        return replacement;
    }
    return node;
    if(
        t.currentNode?.parent?.parent?.parent &&
        ts.isVariableDeclaration(t.currentNode.parent) &&
        // ts.isVariableDeclarationList(t.currentNode.parent.parent) &&
        ts.isVariableStatement(t.currentNode.parent.parent) &&
        ts.isSourceFile(t.currentNode.parent.parent.parent)
    ) {
        return t.factory.createCallExpression(
            t.factory.createArrowFunction(
                undefined, undefined, [], undefined, undefined, 
                t.currentNode
            )
        );
    }
    return t.currentNode;
});
// sf.getChildrenOfKind(SyntaxKind.VariableStatement).forEach(node => {
//     console.log(node.getKindName());
//     for(const decl of node.getDeclarationList().getDeclarations()) {
//         const init = decl.getInitializer();
//         if(init) {
//             console.log(init.getText());
//             const replacement = '/* @__PURE__ */(() => (' + init.getText() + '))();';
//             console.log(replacement);
//             init.replaceWithText(replacement);
//         }
//     }
// });
out = sf.print();
}

writeFileSync('./out.mjs', out);

esbuild.buildSync(await getOptions('./entrypoint2.js', './out2.mjs'));

{
    const diagnosticsFound = new Set();
    let out = readFileSync('out2.mjs', 'utf8')
        .replace(/Diagnostics\.([a-zA-Z0-9$_]+)\b/g, ($0) => {
            diagnosticsFound.add($0.replace(/^Diagnostics\./, ''));
            return $0;
        });
    /** @type {Array<{start: number, length: number}>} */
    const removals = [];
    // outer:
    // while(true) {
    //     let removed = 0;
        const project = new Project({ compilerOptions: { outDir: "dist", declaration: true } });
        const sf = project.createSourceFile("out.mjs", out, {overwrite: true});
        const n = sf.getDescendantsOfKind(ts.SyntaxKind.VariableDeclaration).find(n => n.getName() === 'Diagnostics');
        // console.log(n.getText());
        const props = n.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression).getChildrenOfKind(SyntaxKind.PropertyAssignment);
        for(const prop of props) {
            if(!diagnosticsFound.has(prop.getName())) {
                removals.unshift({start: prop.getStart(), length: prop.getText().length + 1});
                // prop.remove();
                // removed++;
                // if(removed > 10) {
                //     break;
                // }
            }
        }
    //     out = sf.print();
    //     if(removed === 0)
    //         break;
    // }
    for(const r of removals) {
        out = out.slice(0, r.start) + out.slice(r.start + r.length);
    }
    writeFileSync('out2.mjs', out);
}

esbuild.buildSync(await getOptions('./entrypoint3.js', './out3.mjs'));

{
    console.log((await terser.minify({
        'out3.mjs': `
            var version = (() => "5.0.2")();
            export {version};
        `
    }, {
        module: true,
        compress: {
            sequences: false,
            inline: true
        },
        mangle: false,
        output: {},
        parse: {},
        rename: {},
    })).code);
    let out = readFileSync('out3.mjs', 'utf8');
    out = (await terser.minify({
        'foo.mjs': out
    }, {
        module: true,
        compress: {
            sequences: false,
            inline: true
        },
        mangle: false,
        output: {},
        parse: {},
        rename: {},
    })).code;
    writeFileSync('out4.mjs', out);
    out = (await terser.minify({
        'foo.mjs': out.replace(/\/\* @__PURE__ \*\//g, ' ')
    }, {
        module: true,
        compress: {
            sequences: false,
            inline: true
        },
        mangle: false,
        output: {},
        parse: {},
        rename: {},
    })).code;
    writeFileSync('out5.mjs', out);
    out = prettier.format(out, {
        printWidth: 120
    });
    writeFileSync('out6.mjs', out);
}