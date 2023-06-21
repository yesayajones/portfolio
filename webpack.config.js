const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[name].[ext]',
							outputPath: 'images/',
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],
	},
};
