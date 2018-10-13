<template>
  <header class="header">
    <div class="header__contents">
      <h1 class="header__intro">An abridged collection of things built by Andrew Hill</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header--loading {
  background-color: red;
  color: white;
}
.header__contents {
  @include wrapper;
  height: 100vh;
  position: relative;
}
.header__intro {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  @media screen and (min-width: $desktop) {
    transform: none;
  }
}
</style>
