var path = require("path");
module.exports = {
  entry: [
    './app/app.js'
  ],
	module: {
		loaders: [{
		  test: /\.js?$/,
		  exclude: /node_modules/,
		  loader: 'babel'
		}]
  },
  resolve: {
	extensions: ['', '.js'],
  },
  output: {
    filename: 'bundle.js'
  },
	watch: true
};