const webpack = require('webpack');
const path = require('path');

const umd = {
  target: "web",
  mode: "production",
  output: {
    filename: 'index.js',
    library: 'CoinbaseWalletSdk',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/umd')
  },
  resolve: {
    fallback: {
      // stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
       Buffer: ['buffer', 'Buffer'],
    }),
  ],
}

const esm = {
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
  resolve: {
    fallback: {
      // stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
       Buffer: ['buffer', 'Buffer'],
    }),
  ],
}

module.exports = [umd, esm]
