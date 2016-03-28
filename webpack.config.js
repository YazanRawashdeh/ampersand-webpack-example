'use strict';


const plugins = require('webpack-load-plugins')(); 
const path = require("path");

//https://www.npmjs.com/package/webpack-load-plugins
// automagiacally require all webpack plugins

let config = {
	context : __dirname, // base path
	entry : "./client/app.js", // CHANGE FOR TEST
	output: {
        publicPath: "/",
		path: path.join(__dirname),
		filename: "app.bundle.js"
	},
	// plugins:[
    // 	new plugins.esmangle()//ESMangleWebpackPlugin()
    // 	],
 module: {
 	loaders: 
 	 [
     { 
 		test: /\.css$/,
 		loaders: ["style", "css"],
			include: [ // possible to use too
				path.resolve(__dirname, "client/css/")
			]
		},
		{ test: /\.hbs$/, loader: "handlebars-loader" },
		{
		    test: /\.js?$/, //  possible /\.jsx?$/ too 
		    exclude: /(node_modules|bower_components)/,
		    comments : false,
		    loader: 'babel', // loader for babel 
		    query: {
		    	cacheDirectory: true,
		    	plugins: ['transform-runtime'],
		      	presets: ['es2015'] // can add 'react'  later
		      	/*
				Pre-6.x, Babel enabled certain transformations by default.
				However, Babel 6.x does not ship with any transformations enabled.
				You need to explicitly tell it what transformations to run.
				The simplest way to do this is by using a preset, such as the ES2015 Preset.
				You can install it with (npm install babel-preset-es2015 --save-dev)
				*/
			}
		}]
	}
	// for loading modules
	// resolve: {
	//   	root: [
	//     	path.resolve('./app/modules'),
	//     	path.resolve('./vendor/modules')
	//   	]
	// }
}

module.exports = config;