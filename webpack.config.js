module.exports = {
    entry: "./src/main.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: "./dist/main.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "buble" }
        ]
    }
};
