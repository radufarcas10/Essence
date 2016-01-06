var path = require('path');
var react = require('react');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    'item': path.resolve(__dirname, './src/item.jsx'),
    'menu': path.resolve(__dirname, './src/menu.jsx')
  },
  output: { 
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        },
    }),
  ]
};