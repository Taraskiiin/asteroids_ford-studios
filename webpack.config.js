const path = require(`path`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: `./src/index.js`,
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `main.js`
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'img',
                            outputPath: 'img',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                    }
                ]
            },
            {
    test: /\.css$/,
        use: [
            "style-loader", // Injects style into DOM
            "css-loader",   // Turns CSS into JS
        ]
},
        ],
    },
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
],
    devServer: {
    contentBase: path.join(__dirname, 'dist'),
        compress: true,
            port: 9000,
                hot: true
}
};