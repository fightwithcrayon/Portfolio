<template>
  <div id="app">
    <transition mode="in-out" name="curtain">
      <Header key="1" class="header--loading" v-if="loading"/>
      <Header key="2" v-else/>
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
    window.setTimeout(() => { this.loading = false }, 1000)
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
  color: $text-color;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 vr(1);
}
.curtain-leave-active {
  z-index: 3;
  transition: transform 1s;
  .header__contents {
    transition: transform 1s;
  }
}
.curtain-leave {
  position: fixed;
  top: 0;
  left: 0;
}
.curtain-leave-to {
  transform: translate3d(0px, -100vh, -0vh) scale3d(1, 1, 1);
  .header__contents {
    transform: translate3d(0px, 100vh, -0vh) scale3d(1, 1, 1);
  }
}
</style>
