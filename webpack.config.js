var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  context: path.join(__dirname + "/src"),
  entry: {
    javascript: "./js/Routes.js",
    html: "./index.html",
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{presets:['es2015','react', 'stage-0'], plugins:[]}
      },
      //Put all node_modules requiring imports etc in the below loader 'include'
      {
        test: /\.js?$/,
        include: /d3-react-sparkline/,
        loader: 'babel',
        query:{presets:['es2015','react', 'stage-0']}
      },
      {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
       include: path.join(__dirname + '/src'),

     },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { test: /\.json$/, loader: 'json-loader' }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    },
    node: {
      console: 'true',
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  },//JerJohn15 - added BrowserSyncPlugin
  plugins:[
    new ExtractTextPlugin("main.css"),
    new BrowserSyncPlugin({
         host: 'localhost',
         port: 8080,
         proxy: 'http://localhost:8080/'
     })
  ]
};

// config.devtool = 'eval'; // Speed up incremental builds
// config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
// config.module.loaders[0].query.plugins.push('react-transform');
// config.module.loaders[0].query.extra = {
//   'react-transform': [{
//     target: 'react-transform-hmr',
//     imports: ['react-native'],
//     locals: ['module']
//   }]
// };

module.exports = config;
