const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'App.js'
    },
    module: {

    },
    devServer: {
        contentBase: path.resolve(__dirname, 'js'),
        port: 8000
    }
}