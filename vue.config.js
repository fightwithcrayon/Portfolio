// vue.config.js
const projects = require('./src/data/projects.js')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

let routes = projects.map(p => p.slug ? `/projects/${p.slug}` : false).filter(r => r)
routes.push('/')
routes = []
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: routes,
          renderer: new Renderer({
            timeout: 0,
            maxConcurrentRoutes: 1,
            renderAfterTime: 5000,
            headless: false
          })
        })
      ]
    } else {
      config.devServer = {
        clientLogLevel: 'info',
        host: '127.0.0.1',
        watchOptions: {
          poll: true
        }
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