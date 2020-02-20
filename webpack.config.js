const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "source-map-loader"
                    },
                ]
            },
            {
                test: /.(html|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                        },
                    }
                ]
            }
        ]
    },
};