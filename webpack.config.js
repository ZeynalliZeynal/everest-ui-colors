const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    accent: "./src/accent.css",
    gray: "./src/gray.css",
    amber: "./src/amber.css",
    "gray-alpha": "./src/gray-alpha.css",
    blue: "./src/blue.css",
    red: "./src/red.css",
    green: "./src/green.css",
    teal: "./src/teal.css",
    pink: "./src/pink.css",
    purple: "./src/purple.css",
    main: "./src/main.css",
    base: "./src/base.css",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output each CSS file separately
    }),
  ],
};
