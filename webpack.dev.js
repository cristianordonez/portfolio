require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      hot: true,
      historyApiFallback: true,
      client: {
         overlay: {
            errors: true,
            warnings: false,
         },
      },
      static: DIST_DIR,
      allowedHosts: 'auto',
      port: 3000,
      //! removed for https connection
      // proxy: {
      //    '/api': {
      //       target: 'http://localhost:8080',
      //       pathRewrite: { '^/api': '' },
      //    },
      // },
   },
});
