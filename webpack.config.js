var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const reactRules = {
    test: /.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: [
            ['@babel/preset-react',
                {
                    runtime: 'automatic'
                }
            ]
        ]
    }
}
const cssRules = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
}

const rules = [reactRules, cssRules];

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./app/index.js'],
    mode: 'development',
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: { rules },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
}