const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    home: './src/home.js',
    menu: './src/menu.js',
    contact: './src/contact.js',
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jpeg$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(
        {
            filename: "main.css",
        }
    ),
    new HtmlWebpackPlugin({
      title: 'Chef Bubu\'s',
    }),
  ],
};
