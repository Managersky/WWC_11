const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //Plugin for minimalize code

module.exports = {
    entry: "./js/test-webpack-input.js",
    output: {
        path: `${__dirname}/js`,
        filename: "js/test-webpack-output.js"
    },
    watch: true,
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    "presets": [
                        ["env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ]
                }
            }
        }]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
}