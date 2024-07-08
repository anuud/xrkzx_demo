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
        target: 'http://8.138.7.174:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 如果你的接口路径带有 '/api' 前缀，这里将其重写为空，以匹配目标接口的真实路径
        }
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
};
