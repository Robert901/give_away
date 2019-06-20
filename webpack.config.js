const HtmlWebPackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: "dist/out.js",
    path: path.resolve(__dirname)
  },
  watch: true,
  devServer: {
    open: true
  }, //opcjonalne do otwierania przegladarki
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|csv)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "images",
            outputPath: "images"
          }
        }
      }
    ]
  }
}