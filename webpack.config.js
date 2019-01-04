const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const env = process.env.BUILD_MODE;

module.exports = {
  mode: env || "development",
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true
  }
};
