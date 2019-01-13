// vue.config.js
const projects = require('./src/data/projects.js')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

let routes = projects.map(p => p.slug ? `/project/${p.slug}` : false).filter(r => r)
routes.push('/')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('PrerenderSPA')
      .use(PrerenderSPAPlugin, [{
        staticDir: path.join(__dirname, 'dist'),
        routes: routes,
        renderer: new Renderer({
          timeout: 0,
          maxConcurrentRoutes: 1,
          renderAfterTime: 5000,
          headless: false
        })
      }])
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/variables.scss";@import "@/scss/mixins.scss";`
      }
    }
  }
}