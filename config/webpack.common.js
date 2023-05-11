const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./../src/index.tsx"),
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, "./../tsconfig.json"),
      }),
    ],
    extensions: [".js", ".jsx", ".ts", ".tsx", "css", "less", "ttf"],
    fallback: {
      buffer: require.resolve("buffer/"),
      url: require.resolve("url/"),
    },
    alias: {
      "@mui/base/utils": path.join(
        __dirname,
        "./../node_modules/@mui/base/utils"
      ),
    },
  },
  output: {
    path: path.join(__dirname, "./../dist"),
    filename: "main-client.[fullhash].js",
    publicPath: "/",
    chunkFilename: "[id].[chunkhash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        exclude: /\.test\.tsx?$/,
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: "url-loader?limit=25000",
      },
      {
        test: /\.(css|less)(\?|$)/,
        exclude: path.join(__dirname, "./../node_modules/"),
        use: [
          "style-loader",
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]",
              },
              localsConvention: "camelCase",
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] }),
  ],
};
