// make it possible to require es6 modules
require('babel/register')
var webpackConfig = require('hjs-webpack')
var React = require('react')

module.exports = webpackConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true
})
