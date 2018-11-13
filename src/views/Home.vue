<template>
  <div class="home">
    <Nav class="home__nav" />
    <Bio class="home__bio"/>
    <NowPlaying class="home__np"/>
    <Works class="home__works"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Bio from '@/components/Bio.vue'
import NowPlaying from '@/components/NowPlaying.vue'
import Works from '@/components/Works.vue'

export default {
  name: 'Home',
  components: {
    Bio, Nav, NowPlaying, Works
  }
}
</script>

<style lang="scss">
.home {
  @media (min-width: $lg) {
    display: grid;
    grid-template-areas:
      "nav np"
      "bio np"
      "works works";
    grid-template-rows: min-content 1fr;
  }
  &__nav {
    grid-area: nav;
  }
  &__bio {
    grid-area: bio;
  }
  &__np {
    display: none;
    grid-area: np;
    @media (min-width: $lg) {
      display: block;
    }
  }
  &__works {
    grid-area: works;
    margin-top: vr(1);
  }
}
</style>
