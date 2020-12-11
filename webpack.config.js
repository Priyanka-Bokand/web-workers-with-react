const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") },
    module: {
        rules: [
          {
            test: /\.worker\.js$/,
            use: { loader: 'worker-loader' }
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};