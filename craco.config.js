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

  webpack: {
    devServer: {
      proxy: {
        '/api': 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
