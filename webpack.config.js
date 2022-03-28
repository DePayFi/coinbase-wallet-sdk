const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    target: "web",
    mode: "production",
    output: {
      filename: 'index.js',
      library: 'CoinbaseWalletSdk',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist/umd')
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
          LINK_API_URL: JSON.stringify("https://www.walletlink.org"),
          SDK_VERSION: JSON.stringify("3.0.5")
        }
      })
    ],
  },
  {
    target: "web",
    mode: "production",
    experiments: {
      outputModule: true,
    },
    output: {
      filename: 'index.js',
      libraryTarget: 'module',
      path: path.resolve(__dirname, 'dist/esm')
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
          LINK_API_URL: JSON.stringify("https://www.walletlink.org"),
          SDK_VERSION: JSON.stringify("3.0.5")
        }
      })
    ],
  }
]
