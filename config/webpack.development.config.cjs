const { merge } = require('webpack-merge');
const basicConfig = require('./webpack.config.cjs');

const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: `[name]_[local]--[hash:base64:5]`,
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
             {
                test: /\.(ico|png|jpg|jpeg|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[name][ext]",
                },
            },
        ],
    },
    devServer: {
        port: 9000,
        open: true,
    },
};

module.exports = merge(basicConfig, config);

