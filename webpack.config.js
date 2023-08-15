const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        type: 'asset/inline'
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      insert: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'adRespect Zadanie Rekrutacyjne',
      chunks: ['main']
    }),
    new ESLintPlugin({
      failOnError: false,
      emitWarning: true
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
