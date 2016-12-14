var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/compiled');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: [APP_DIR + '/src'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/, 
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets:['react', 'es2015'],
        }
      },
      {
        test: /\.css?/,
        loader: "style!css"
      }
    ]
  }
}

module.exports = config;