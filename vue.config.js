// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/variables.scss"; @import "@/scss/mixins.scss";'
      }
    }
  }
}