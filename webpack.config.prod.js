var path = require('path');
var webpack = require('webpack');
var companyName = require('./src/shared/content/coverLetter').companyName

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist', companyName),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
