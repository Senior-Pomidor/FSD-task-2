const webpack = require('webpack');
const path = require('path');
let rootPath = path.join(__dirname, '../');
const merge = require('webpack-merge');
const common = require(rootPath + '/webpack/webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new BundleAnalyzerPlugin()
	],
	module: {
		rules: [
		]
	}
});
