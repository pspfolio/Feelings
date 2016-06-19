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
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './'
  }
};