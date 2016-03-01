var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?/,
			loaders: ['babel'],
			include: [
				path.join(__dirname, 'src'),
				path.join(__dirname, 'node_modules/resume-content')
			]
		}, {
			test: /\.css$/,
			loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}, {
			test: /\.txt$/,
			loader: 'raw-loader'
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
		}, {
			test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			loader: 'file-loader'
		}]
	},
	resolve: {
		root: path.resolve('./src')
	}
};
