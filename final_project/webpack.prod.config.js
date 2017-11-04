let webpack = require('webpack');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let merge = require('webpack-merge');
let common = require('./webpack.common.config.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin()
  ]
});