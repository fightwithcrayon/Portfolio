// vue.config.js
var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  chainWebpack: config => {
    config
      .plugin('Imagemin')
      .use(ImageminPlugin, [{
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        pngquant: {
          quality: '85-90'
        }
      }])
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/variables.scss"; @import "@/scss/mixins.scss";`
      }
    }
  }
}