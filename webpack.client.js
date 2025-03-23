const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './client.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.scss$/,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
			{
        /* Fonts and Images */
        test: /\.(png|gif|jpg|jpeg|svg|ttf|eot|svg|otf|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource',
				generator: {
          filename: '[name]-[contenthash:8][ext]', // Keep original filenames
        },
			},
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
