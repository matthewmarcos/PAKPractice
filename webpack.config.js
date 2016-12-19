const webpack = require('webpack');
const path = require('path');

 const config = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8000,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: false,
            warnings: true,
            publicPath: false
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }]
    }
};

module.exports = config;
