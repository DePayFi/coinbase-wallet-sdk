const path = require('path');

module.exports = {
    // The entry point of your library
    entry: './src/index.js',

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            type: 'module',
        },
    },

    // Experiments for enabling ESM
    experiments: {
        outputModule: true,
    },

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

    // Optional: Configuration for webpack-dev-server
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
    },

    // Optional: Source map configuration for development
    devtool: 'source-map',
};
