<template>
  <div class="nav">
    <router-link to="/" :class="`nav__crumb nav__crumb-index ${child ? '' : 'nav__crumb-active'}`">Index</router-link>
    <h1 class="nav__crumb nav__crumb-child nav__crumb-active" v-if="child">{{child}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: ['child']
}
</script>

<style lang="scss">
.nav {
  grid-area: nav;
  -ms-grid-row: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: vr(1);
  height: min-content;
  &__crumb-active {
    @include link_underline;
  }
  &__crumb-index {
    width: vr(1.5);
  }
  &__crumb-child {
    position: relative;
    margin-left: vr(1);
    &::before {
      content: '▶';
      position: absolute;
      top: 50%;
      left: vr(-0.5);
      transform: translate(-50%, -50%);
      font-size: vr(0.25);
    }
  }
}
</style>
