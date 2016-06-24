var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: 'dist',
		publicPath: 'dist/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			excludes: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'assets/index.html',
			filename: '../index.html',
			inject: true
		})
	]
}
