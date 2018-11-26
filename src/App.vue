<template>
  <router-view id="app" />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Graphik';
  font-weight: 400;
  src: local('Graphik Regular Web'), local('Graphik Web'), local('Graphik Regular'), local('Graphik'),
       url('./assets/fonts/Graphik-Regular-Web.woff') format('woff');
}
body, html, h1, h2, h3, h4, h5, h6, p, ul li, a {
  margin: 0;
  padding: 0;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  text-decoration: none;
  color: inherit;
}
body {
  background-color: $bg-color;
  font-size: $font-size;
  line-height: $line-height;
  font-weight: $font-weight-regular;
  color: $text-color;
  font-family: 'Graphik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: vr(0.5);
  @media (min-width: $md) {
    margin: vr(0.5) vr(1);
  }
}
</style>
