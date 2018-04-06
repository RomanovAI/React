let path = require('path');

module.exports = {
    entry: './Entry.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, "./dist")
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["stage-0", "env", "react", "es2015"]
                    },
                },
            },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
        ]
    }
};
