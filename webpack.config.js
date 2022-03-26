const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const umd = {
  output: {
    filename: 'index.js',
    library: 'CoinbaseWalletSdk',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/umd')
  },
  node: {
    Buffer: true
  },
  resolve: {
    alias: {
      "crypto": "crypto-browserify"
    }
  }
}

const esm = {
  output: {
    filename: 'index.js',
    library: 'CoinbaseWalletSdk',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist/esm')
  },
  plugins: [
    new EsmWebpackPlugin()
  ],
  node: {
    Buffer: true,
  },
  resolve: {
    alias: {
      "crypto": "crypto-browserify"
    }
  }
}

module.exports = [umd, esm]
