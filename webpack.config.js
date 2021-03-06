var webpack = require('webpack');
var path = require('path');
// Enviroment flag
var plugins = [];
var env = process.env.WEBPACK_ENV;

// // Differ settings based on production flag
// if (env === 'production') {
//   var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//   plugins.push(new UglifyJsPlugin({ minimize: true }));
//   plugins.push(new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }
//   ));

//   appName = appName + '.min.js';
// } else {
//   appName = appName + '.js';
// }

// Main Settings config
module.exports = {
  entry: './app/app.js',
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins
};