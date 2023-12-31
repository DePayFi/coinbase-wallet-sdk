const path = require('path');

// Base configuration
const baseConfig = {
    // The entry point of your library
    entry: './src/index.js',

    // Module and rules for handling JavaScript files
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            // Add other rules for different file types if needed
        ],
    },

    // Resolve options
    resolve: {
        extensions: ['.js'], // Add other extensions if needed
    },

    // Mode (development or production)
    mode: 'production',

    // Optional: Source map configuration for development
    devtool: 'source-map',
};

// Configuration for ESM output
const esmConfig = {
    ...baseConfig,
    name: 'esm',
    output: {
        path: path.resolve(__dirname, 'dist/esm'),
        filename: 'index.js',
        library: {
            type: 'module',
        },
    },
    experiments: {
        outputModule: true,
    },
};

// Configuration for UMD output
const umdConfig = {
    ...baseConfig,
    name: 'umd',
    output: {
        path: path.resolve(__dirname, 'dist/umd'),
        filename: 'index.js',
        library: {
            name: 'CoinbaseWalletSdk',
            type: 'umd',
        },
    },
    // Remove the experiments field for UMD
};

module.exports = [esmConfig, umdConfig];
