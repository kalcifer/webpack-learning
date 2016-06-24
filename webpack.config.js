module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: 'dist/',
		publicPath:'dist/'
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
	}
}
