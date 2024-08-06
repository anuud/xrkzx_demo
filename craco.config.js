const path = require('path');
const CraolessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CraolessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.76.67.195:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
};
