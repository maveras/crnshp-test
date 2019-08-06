const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtract = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, "/static"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
        use: [
          MiniCSSExtract.loader,
          'css-loader',
          'postcss-loader',
        ],

      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCSSExtract({
      filename: 'app.css',
      chunkFilename: '[id].css',
    }),
  ]
};