const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      title: "Planning Pocker",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
