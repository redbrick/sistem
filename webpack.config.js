const webpack = require('webpack');
const glob = require('glob');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'development',
});

const loader = new webpack.ProvidePlugin({
  fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
});

const plugins =
  process.env.NODE_ENV !== 'development'
    ? [
        loader,
        extractSass,
        new PurifyCSSPlugin({
          paths: glob.sync(`${__dirname}/public/**/*.html`),
          minimize: true,
        }),
        new UglifyJSPlugin({
          parallel: true,
          uglifyOptions: {
            ecma: 8,
          },
        }),
      ]
    : [loader, extractSass];

module.exports = {
  plugins,
  context: `${__dirname}/src`,
  entry: ['./js/main'],
  output: {
    path: `${__dirname}/static/assets`,
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.((png)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/[hash].[ext]',
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true },
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true },
      },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/octet-stream',
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
    ],
  },
};
