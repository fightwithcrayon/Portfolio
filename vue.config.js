// vue.config.js
module.exports = {
  configureWebpack: {
    devServer: {
      clientLogLevel: 'info',
      host: '127.0.0.1',
      watchOptions: {
        poll: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/variables.scss";@import "@/scss/mixins.scss";`
      }
    }
  }
}