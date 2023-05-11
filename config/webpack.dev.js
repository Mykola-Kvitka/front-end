const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './../dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        proxy: {
            context: (path) => /react\/api/i.test(path),
            target: 'https://localhost:44303',
            secure: false,
        },
    },
});
