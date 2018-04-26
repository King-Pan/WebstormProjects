const path = require('path');

const config = {
    entry: './src/js/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my.bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.css/,use: ['style-loader','css-loader']},
            { test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;
