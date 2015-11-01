module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./js/app.js",
    html: "./index.html",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{presets:['es2015','react']}
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
};
