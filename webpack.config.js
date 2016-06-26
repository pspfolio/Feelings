var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/app.js'
  ],
	module: {
		loaders: [{
		   test: /\.js?$/,
		   exclude: /node_modules/,
		   loader: 'babel'
		  },
      {
       test: /\.scss?$/,
       loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ],
  resolve: {
	  extensions: ['', '.js'],
  },
  output: {
    filename: 'bundle.js'
  },
	watch: true
};