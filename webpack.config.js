const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".ts", ".js", ".json", ".jsx", ".css"]
    },
    devtool: "source-map",
    target: "web",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "awesome-typescript-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}