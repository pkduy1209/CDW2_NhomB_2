var webpack = require('webpack');

module.exports = {
	entry:{
		index:'./src/index.js',
		about:'./src/about.js',
		mail:'./src/mail.js',
		products:'./src/products.js',
		products1:'./src/products1.js',
		products2:'./src/products2.js',
		single:'./src/single.js',
		codes:'./src/codes.js',
		faq:'./src/faq.js',
	},
	output:{
		filename:'./js/[name].bundle.js',
		path: __dirname + '/dist'
	},
	watch: true,
	module:{
		rules: [
			{test:/\.html$/, loader: 'html-loader'},
			{test:/\.css$/, loaders: ['style-loader', 'css-loader']},
			{test:/\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]'},
			// xuất data url nếu file >= 10kb trở lên
		]
	}
};