Experiment to create a tree-shaken, bundled subset of the TS compiler APIs.  For example, a subset that can only load
tsconfig files.

*Assumes a clone of typescript with matching branch; I haven't set up git submodule yet*

```
git clone https://github.com/cspotcode/typescript
cd typescript
git checkout typescript-dce
cd ..
```

Benefits:

- smaller install size
- faster startup

Accomplishes via a few techniques:

- small modifications to the compiler's source code
- bundling with esbuild
- adding `/* @__PURE__ */` annotations to all top-level `var` statements
- manually tweaking unused TS `namespace`s so that DCE removes them
- manually removing unreferenced `Diagnostics` properties
- using terser to perform some more aggressive optimizations that esbuild
- prettier to make the output look readable

Filesize comparison:

```
$ du -sh ./node_modules/typescript/lib/typescript.js
7.8M    ./node_modules/typescript/lib/typescript.js

$ node ./build.mjs && du -sh ./out*.mjs
1.7M    ./out.mjs
152K    ./out2.mjs
148K    ./out3.mjs
112K    ./out4.mjs
112K    ./out5.mjs
152K    ./out6.mjs
```

Informal startup time benchmarks.

```
$ hyperfine 'node ./bench.js ./out6.js' 'node ./bench.js ./node_modules/typescript/lib/typescript.js'
Benchmark 1: node ./bench.js ./out6.js
  Time (mean ± σ):      42.7 ms ±   5.6 ms    [User: 35.0 ms, System: 7.9 ms]
  Range (min … max):    33.3 ms …  59.1 ms    61 runs
 
Benchmark 2: node ./bench.js ./node_modules/typescript/lib/typescript.js
  Time (mean ± σ):     199.0 ms ±  12.6 ms    [User: 185.7 ms, System: 17.4 ms]
  Range (min … max):   180.8 ms … 229.0 ms    14 runs
 
Summary
  'node ./bench.js ./out6.js' ran
    4.66 ± 0.68 times faster than 'node ./bench.js ./node_modules/typescript/lib/typescript.js'
```