const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV == 'development'

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: ['./src/index.tsx']
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.tsx','.ts']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 'css-loader']
            },{
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 'css-loader', 'sass-loader']
            },
            {
                test: /\.png$/,
                use: ['file-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript','@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
}