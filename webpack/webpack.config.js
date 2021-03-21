//
// UNUSED
//

const Path = require('path');
const ShakePlugin = require('webpack-common-shake').Plugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [{
    entry: Path.resolve(__dirname, 'dist/entry.js'),
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'typescript-lib-webpacked.js'
    },
    externals: {
        'fs': 'commonjs2 fs',
        'path': 'commonjs2 path',
        'os': 'commonjs2 os',
        'crypto': 'commonjs2 crypto',
        'inspector': 'commonjs2 inspector',
        'source-map': 'commonjs2 source-map',
        'source-map-support': 'commonjs2 source-map-support',
        'buffer': 'commonjs2 buffer',
    },
    mode: 'production',
    optimization: {
        // usedExports: true,
        minimizer: [
            new TerserPlugin({
              terserOptions: {
                // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                mangle: false,
                compress: {
                    defaults: true,
                    dead_code: true,
                    passes: 30,
                    reduce_vars: true,
                    side_effects: true,
                    toplevel: true,
                    unused: true,
                }
              },
            }),
          ],
    },
    devtool: 'source-map',
    //   plugins: [ new ShakePlugin() ]
    module: {
        rules: [
            {
                include: Path.resolve(__dirname, 'dist/typescript-lib-postprocessed.js'),
                sideEffects: false
            },
        ],
    },
}];
