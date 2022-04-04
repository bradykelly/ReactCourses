const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
    console.log(env);
    const isProduction = env === 'production';
    return {
        entry: "./src/index.js",
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                }
            ]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx"]
        },
        output: {
            path: path.resolve(__dirname, "dist/"),
            publicPath: "/dist/",
            filename: "bundle.js"
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, "public/")
            },
            port: 3000,
            devMiddleware: {
                publicPath: "http://localhost:3000/dist/",
            },
            hot: true
        },
        devtool: isProduction ? "source-map" : "inline-source-map",
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    };
};
