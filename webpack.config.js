var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

var buildPath = path.resolve(__dirname);
var mainPath = path.resolve(__dirname, 'core/client', 'app.js');

module.exports = {

    context: mainPath,

    entry: mainPath,

    output: {
        path: buildPath,
        // publicPath: buildPath,
        filename: 'bundle.js'
    },

    plugins: [
        // new ExtractTextPlugin('styles.css')
    ],

    module: {
        postLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=800'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

    devServer: {
        contentBase: './core/client'
    },
};