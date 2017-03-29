const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

let config = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR,
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js(x?)$/,
            include: SRC_DIR,
            loader: "babel-loader",
            exclude: /(node_modules)/
        }]
    }

}

module.exports = config;
