var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash].js',
		path: 'dist',
		publicPath: 'dist/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			loaders: ['style', 'css']
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
