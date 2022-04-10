const path=require("path");
const HtmlWebpack=require("html-webpack-plugin");
const CssExtractPlugin = require("mini-css-extract-plugin");
const MinimizeCssPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports=function(env,args)
{
    const isProd=args && args.mode && ["prod","production"].indexOf(args.mode)>=0;
    const mode=isProd?"production":"development";

    const conf={
        target:"web",
        mode:mode,
        entry:"./src/index.tsx", 
        output:{
            path: path.resolve(__dirname, "dist"),
        },    
        plugins:[
            new HtmlWebpack({
                template:path.resolve(__dirname,"src","index.html"),
                filename:"index.html"
            }),
            new CssExtractPlugin({
                filename: `[name].css`
            }),
        ],
        resolve:{
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                "react": "preact/compat",
                "react-dom": "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react/jsx-runtime": "preact/jsx-runtime",
            },
            fallback: {
                "stream": false,
                "buffer": false,
                "crypto": false,
            }
        },
        module:{
            rules:[],
        },
        optimization:{
            minimize:false,
            minimizer:[],
        },
        devServer:{            
            historyApiFallback: true,
            open:false
        },
    };


    // script loader
    conf.module.rules.push({
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                ],
                plugins: [
                    "@babel/plugin-syntax-dynamic-import",          // already include in @babel/preset-env work without yarn add
                    "@babel/plugin-transform-runtime",              // use tarnsform runtime (async  / await) work without yarn add
                    "@babel/plugin-proposal-class-properties",      // already include in @babel/preset-env work without yarn add
                    "@babel/plugin-proposal-object-rest-spread",    // already include in @babel/preset-env work without yarn add
                    "babel-plugin-transform-react-remove-prop-types",
                ]
            }
        },
    });

    // css loader
    conf.module.rules.push({
        test:/\.s[ac]ss$/i,
        use:[
            CssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
    });

    if(isProd)
    {
        conf.optimization.minimize=true;
        conf.optimization.runtimeChunk='single';
        conf.optimization.minimizer.push(new MinimizeCssPlugin());
        conf.optimization.minimizer.push(new TerserWebpackPlugin({
            terserOptions:{
                format:{
                    comments:false,
                }
            },
            extractComments:false
        }))
    }

    return conf;
}