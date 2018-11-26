<template>
  <div class="nav">
    <router-link to="/" :class="`nav__crumb nav__crumb-index ${child ? '' : 'nav__crumb-active'}`">Index</router-link>
    <div class="nav__crumb nav__crumb-child nav__crumb-active" v-if="child">{{child}}</div>
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
  display: flex;
  flex-direction: row;
  margin-bottom: vr(1);
  height: vr(3);
  &__crumb-active {
    @include link_underline;
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
