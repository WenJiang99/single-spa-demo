const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'root-app': 'root-app',
    'react-app': './apps/react-app/index.js',
    'vue-app': './apps/vue-app/index.js',
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      'single-spa': path.resolve(__dirname, 'single-spa/lib/es2015/esm/single-spa.dev.js'),
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          'node_modules/single-spa-layout-app/dist/img',
        ),
        to: path.resolve(__dirname, 'dist/img'),
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      chunks: ['root-app'],
    }),
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    historyApiFallback: true,
    writeToDisk: true,
  },
  mode: 'development',
};
