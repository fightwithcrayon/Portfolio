<template>
  <header class="header">
    <div class="header__contents">
      <div class="header__intro">
        <h1>An <span data-tooltip="Contact me for more">abridged</span> collection of <span data-tooltip="Websites, apps, and tools">things</span> built by <span data-tooltip="Some developer who works in Sheffield">Andrew Hill</span></h1>
        <p>Also see my work for <a href="https://www.theblackeyeproject.co.uk">Black Eye Project</a></p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style lang="scss">
.header {
  width: 100vw;
  margin-left: vr(-1);
  z-index: 1;
  overflow: hidden;
}
.header--loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: $peach;
  color: white;
  z-index: 2;
  overflow: hidden;
  margin: 0;
  .header__contents {
    margin-left: calc((100vw - #{$wrapper}) / 2);
  }
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
  font-size: vr(1.5);
  font-weight: bold;
  @media screen and (min-width: $desktop) {
    transform: none;
  }
  span {
    border-bottom: 2px solid currentColor;
  }
  p, h1 {
    font-weight: inherit;
    font-size: inherit;
    margin: 0 0 vr(1);
  }
}
</style>
