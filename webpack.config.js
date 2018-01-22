var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './example/app.jsx'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: __dirname + "/example",
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './example',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};