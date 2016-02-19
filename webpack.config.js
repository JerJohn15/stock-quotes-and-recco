var path = require('path')
var webpack = require('webpack');

var config = {
  context: __dirname + "/src",
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
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { test: /\.json$/, loader: 'json-loader' }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    node: {
      console: 'true',
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  },
  plugins:[]
}

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
