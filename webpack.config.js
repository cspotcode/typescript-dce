const path = require('path');

module.exports = {
  entry: './entrypoint.ts',
  output: {
    filename: 'out-webpack.js',
    path: path.resolve(__dirname),
  },
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            options: {
                onlyCompileBundledFiles: true,
                // ignoreDiagnostics: [2345]
            }
        }
      },
    ],
  },
    resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};