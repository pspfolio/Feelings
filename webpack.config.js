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
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};