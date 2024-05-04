const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

//Just to help us with directories and folders path
const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {
    //Entry: main file that init our application
    entry: path.resolve(__src, 'main.js'),

    //Output: result of the bundle after webpack run
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__base, 'docs'),
        clean: true
    },

    //Plugins to help and include additionals functionalities to webpack
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Irrilium',
            favicon: path.resolve(__src, 'static', 'favicon.ico'),
            template: path.resolve(__src, 'templates', 'index.html'),
        }),
        new VueLoaderPlugin()
    ],

    module: {
        rules: [
            //Vue loader. Says to webpack that files with .vue extension need to be processed by the vue-loader plugin
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //CSS loaders. Make possible import css files as js modules 
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            //Indicates that png files are assets to be processed by webpack
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    }
}