const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
require('dotenv').config();
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssNano = require('cssnano');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// https://github.com/vercel/next.js/blob/canary/examples/analyze-bundles
const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true'
});

const isRuntime = process.env.NODE_RUNTIME === 'true';

const getNextConfigBuildTime = () => {
   // fix: prevents error when .less files are required by node
   if (typeof require !== 'undefined') {
      require.extensions['.less'] = (file) => {};
   }

   const plugins = [withBundleAnalyzer, [optimizedImages, { inlineImageLimit: -1 }], withLess, withSass, withCSS];

   const nextConfig = {
      // https://stackoverflow.com/questions/61240582/how-to-configure-next-js-with-antd-less-and-sass-css-modules
      lessLoaderOptions: {
         javascriptEnabled: true,
         importLoaders: 0
      },
      cssLoaderOptions: {
         importLoaders: 3,
         localIdentName: '[local]___[hash:base64:5]'
      },
      images: {
         domains: ['test.giangthom.org']
      },
      webpack: (config, { isServer }) => {
         const webpackConfig = { ...config };
         // read .env
         webpackConfig.plugins.push(new webpack.EnvironmentPlugin(process.env));

         // replace moment.js with day.js (https://ant.design/docs/react/replace-moment)
         webpackConfig.plugins.push(new AntdDayjsWebpackPlugin());

         // overwrite antd with custom variables
         // (https://github.com/zeit/next.js/tree/canary/examples/with-ant-design-less)
         if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...webpackConfig.externals];
            webpackConfig.externals = [
               // eslint-disable-next-line consistent-return
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

            webpackConfig.module.rules.unshift({
               test: antStyles,
               use: 'null-loader'
            });
         }

         webpackConfig.node = {
            fs: 'empty'
         };

         webpackConfig.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
            use: [
               {
                  loader: 'url-loader'
               }
            ]
         });

         webpackConfig.optimization.minimizer.push(
            new OptimizeCssAssetsPlugin({
               cssProcessor: cssNano,
               cssProcessorPluginOptions: {
                  preset: ['default', { discardComments: { removeAll: true } }]
               },
               canPrint: true
            })
         );

         return webpackConfig;
      }
   };

   return { plugins, nextConfig };
};

const getNextConfigRunTime = () => {
   const plugins = [];
   const nextConfig = {
      images: {
         domains: ['test.giangthom.org', 'localhost:3000', 'localhost']
      }
   };
   return { plugins, nextConfig };
};

const { plugins, nextConfig } = isRuntime ? getNextConfigRunTime() : getNextConfigBuildTime();

module.exports = withPlugins([...plugins], nextConfig);
