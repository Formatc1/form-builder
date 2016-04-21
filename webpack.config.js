var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap!postcss-loader'
    }]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new ExtractTextPlugin('style.css', {allChunks: true})
  ],
  devServer: {
    historyApiFallback: true
  }
};
