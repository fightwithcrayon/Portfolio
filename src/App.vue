<template>
  <div id="app">
    <transition>
      <Header class="header--loading" v-if="loading"/>
      <Header v-else/>
    </transition>
    <Listings v-if="!loading"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Listings from './components/Listings.vue'

export default {
  name: 'app',
  components: {
    Header, Listings
  },
  mounted () {
    window.setTimeout(() => {this.loading = false}, 1000)
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: $font-size;
  line-height: $line-height;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  margin: 0 vr(1);
}
</style>
