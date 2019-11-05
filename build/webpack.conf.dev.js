const path = require('path')
const merge = require('webpack-merge')
const defaultConfig = require('./webpack.conf.tpl')

module.exports = merge(defaultConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    historyApiFallback: true
  }
})
