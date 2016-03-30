var webpack = require('webpack');
module.exports = {
    output:{
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test:/\.ts$/,
                loader:'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader?minimize=false'
            }
        ],
    },
    devtool: 'source-map',
    debug:true,
    watch:false,
    entry: {
        sayA: "./js/a.js",
        sayB: "./js/b.js",
        sayC: "./js/c.js",
    },
    plugins:[
      new webpack.optimize.CommonsChunkPlugin({
          name:"shared",
          chunks:["sayA", "sayB"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name:"sayC",
          chunks:["sayC"]
        }),
      new webpack.optimize.UglifyJsPlugin({
         compress: {
             warnings: false
         },
         mangle: false
      })    
    ]
}