const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin"), // Here!

module.exports = {
    entry: './js/index.js',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
          },
        ]
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      plugins: [
        // And here!
        new CopyPlugin({
          patterns: [
            { from: "static", to: "static" }
          ],
        }),
        new HtmlWebpackPlugin({
          template: "./dist/bundle.js"
        }),
      ]
    }