const path = require('path'); //webpack.github.io

module.exports = {
    entry: './src/main.js',
    output: { // output отвечает за выходной файл, в данном случаи это bundle.js
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    }
}