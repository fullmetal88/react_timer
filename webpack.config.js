const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('./src'),
  entry: {
    app: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/js/foundation.min.js',
      './app.js',
    ],
  },
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    alias: {
      navigation: '../src/components/Navigation.js',
      foundationStyles: '../node_modules/foundation-sites/dist/css/foundation.min.css',
      customStyles: '../dist/main.scss',
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [path.resolve('./node_modules')],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] },
        }],
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve('./dist'),
  },
  devtool: 'source-map',
};
