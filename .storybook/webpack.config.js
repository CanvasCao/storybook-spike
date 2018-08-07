const path = require("path")
const theme = require("../src/styles/themeConfig")

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: theme,
                            javascriptEnabled: true
                        },
                    },

                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            localIdentName: "[name]__[local]--[hash:base64:4]",
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                // for font
                test: /\.(ttf|otf|eot|woff(?:2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1000,
                        },
                    },
                ],
            },
            {
                // for svg
                test: /\.(svg?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1000,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|ogg|mp3)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1000,
                        },
                    },
                ],
            },
        ],
    }
}
