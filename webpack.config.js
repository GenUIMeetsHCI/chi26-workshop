const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: isProduction ? "/chi26-workshop/" : "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|webp|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "organizers/[name][ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public/organizers",
            to: "organizers",
          },
        ],
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProduction ? "production" : "development"
        ),
      }),
    ],
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "dist"),
        },
        {
          directory: path.join(__dirname, "public"),
          publicPath: "/",
        },
      ],
      compress: true,
      port: 3000,
      hot: true,
    },
  };
};
