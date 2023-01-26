const NodemonWebpackPlugin = require("nodemon-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new NodemonWebpackPlugin()],
};
