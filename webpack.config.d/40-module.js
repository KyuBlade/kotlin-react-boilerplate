Object.assign(config.module, {
    rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.svg$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
        }
    ]
});