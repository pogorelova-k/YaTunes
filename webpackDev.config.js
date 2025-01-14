const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'script.js',
      path: path.resolve(__dirname, './dist')
   },
   mode: 'development',
   devServer: {
      open: true,
      port: 8080,
      hot: true, //перезагружает ту часть,которая обновилась
      writeToDisk: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
                },
            },
            exclude: /node_modules/,
         }
      ]
   }
}