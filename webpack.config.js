const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        static: "./dist",
        open: true
    },
    entry: {
        vendor: path.resolve(__dirname, "./src/vendor/vendor.js"),
        script: path.resolve(__dirname, './src/app/script.js'),
        noticias: path.resolve(__dirname, './src/cardjs/noticias.js'),
        receitas: path.resolve(__dirname, './src/cardjs/receitas.js'),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({filename: './index.html', template: path.resolve(__dirname, './src/index.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/contato.html', template: path.resolve(__dirname, './src/pages/contato.html'), chunks: ['vendor', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/lojas.html', template: path.resolve(__dirname, './src/pages/lojas.html'), chunks: ['vendor', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/quem-somos.html', template: path.resolve(__dirname, './src/pages/quem-somos.html'), chunks: ['vendor', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias.html', template: path.resolve(__dirname, './src/pages/noticias.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias-p2.html', template: path.resolve(__dirname, './src/pages/noticias-p2.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/receitas.html', template: path.resolve(__dirname, './src/pages/receitas.html'), chunks: ['vendor', 'receitas', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/receitas/receita-1.html', template: path.resolve(__dirname, './src/pages/receitas/receita-1.html'), chunks: ['vendor', 'receitas', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/receitas/receita-2.html', template: path.resolve(__dirname, './src/pages/receitas/receita-2.html'), chunks: ['vendor', 'receitas', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/receitas/receita-3.html', template: path.resolve(__dirname, './src/pages/receitas/receita-3.html'), chunks: ['vendor', 'receitas', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/receitas/receita-4.html', template: path.resolve(__dirname, './src/pages/receitas/receita-4.html'), chunks: ['vendor', 'receitas', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/receitas/receita-5.html', template: path.resolve(__dirname, './src/pages/receitas/receita-5.html'), chunks: ['vendor', 'receitas', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/receitas/receita-6.html', template: path.resolve(__dirname, './src/pages/receitas/receita-6.html'), chunks: ['vendor', 'receitas', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias/noticia-1.html', template: path.resolve(__dirname, './src/pages/noticias/noticia-1.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias/noticia-2.html', template: path.resolve(__dirname, './src/pages/noticias/noticia-2.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias/noticia-3.html', template: path.resolve(__dirname, './src/pages/noticias/noticia-3.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias/noticia-4.html', template: path.resolve(__dirname, './src/pages/noticias/noticia-4.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias/noticia-5.html', template: path.resolve(__dirname, './src/pages/noticias/noticia-5.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        new HtmlWebpackPlugin({filename: './pages/noticias/noticia-6.html', template: path.resolve(__dirname, './src/pages/noticias/noticia-6.html'), chunks: ['vendor', 'noticias', 'script'], chunksSortMode: 'manual'}),
        
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./js/build/*','./css/build/*']
          })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|svg|ico)$/,
                use: [
                    {loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: 'images/'
                    }}
                    
                ]
            }
        ]
    },
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    },
    devtool: "source-map"
}