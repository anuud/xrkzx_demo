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
      '/api': 'http://localhost:3003',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
};
