const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './styles/antd-custom.less'), 'utf8'));

module.exports = withCSS(
   withSass(
      withLess({
         cssModules: true,
         cssLoaderOptions: {
            importLoaders: 3,
            localIdentName: '[local]___[hash:base64:5]'
         },
         lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables, // make your antd custom effective
            importLoaders: 0
         },
         images: {
            domains: ['finseed-frontend.vercel.app', 'localhost:3000', 'test.giangthom.org']
         },
         webpack: (config, { isServer }) => {
            config.plugins.push(new webpack.EnvironmentPlugin(process.env));

            config.plugins.push(new AntdDayjsWebpackPlugin());

            // Make Ant styles work with less
            if (isServer) {
               const antStyles = /antd\/.*?\/style.*?/;
               const origExternals = [...config.externals];
               config.externals = [
                  (context, request, callback) => {
                     if (request.match(antStyles)) return callback();
                     if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                     } else {
                        callback();
                     }
                  },
                  ...(typeof origExternals[0] === 'function' ? [] : origExternals)
               ];

               config.module.rules.unshift({
                  test: antStyles,
                  use: 'null-loader'
               });
            }
            return config;
         }
      })
   )
);
