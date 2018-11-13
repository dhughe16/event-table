module.exports = {
    entry: './src/index.js',
    output: {
        filename: './built/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }],
        resolve: {
            extensions: ['', '.js', '.jsx', '.css'],
            modulesDirectories: [
                'node_modules'
            ]
        }
    }
}