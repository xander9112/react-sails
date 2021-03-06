const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    entry: './client/js/index.js'
  },
  output: {
    path: path.join(__dirname, '/.tmp/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader' // inject CSS to page
        }, {
          loader: 'css-loader' // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: () => // post css plugins, can be exported to postcss.config.js
              [
                precss,
                autoprefixer
              ]
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        loader: 'url-loader',
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        options: {
          limit: 10000,
          name: 'media/[name].[hash:8].[ext]'
        }
      },
      {
        loader: 'file-loader',
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/, /\.png$/],
        options: {
          name: 'media/[name].[hash:8].[ext]'
        }

      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'views/pages/homepage-webpack.ejs'
    })
  ]
};
