var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: {
        app: './app.tsx',
        vendor: []
    },
    
    output: {
        filename: 'bundle.js',
        path: __dirname + '/../LinqRunner.Server/wwwroot/js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            { test: /\.css$/, loader: 'style!css' }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
        new CopyWebpackPlugin([
            { from: './**/*.html', to: '../' }
        ])
    ],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "superagent": "superagent",
        "codemirror": "CodeMirror"
    }
};