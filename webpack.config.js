const path = require('path');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', 'jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-source-map'
};
