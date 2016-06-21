var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  'output': {
    'libraryTarget': 'commonjs2'
  },
  'module': {
    'loaders': [{
      'loader': 'babel',
      'test': /\.js$/,
      'exclude': /node_modules/,
      'query': {
        'plugins': ['lodash'],
        'presets': ['es2015']
      }
    }]
  },
  'plugins': [
    new LodashModuleReplacementPlugin,
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin
  ]
};
