var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.resolve('core/client'),

    entry: ['./app'],

    output: {
        path: path.resolve('core/client/build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'core/client'
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

    devtool: 'source-map',

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
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
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
    }
};