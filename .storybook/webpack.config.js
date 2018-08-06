const path = require("path");
// const theme = require("../src/styles/themeConfig")

module.exports = {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../")
            }
        ]
    }
};