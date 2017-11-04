let webpack = require('webpack');
let path = require('path');
let merge = require('webpack-merge');
let common = require('./webpack.common.config.js');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080,
    hot: true
  },
  
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});