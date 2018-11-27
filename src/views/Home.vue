<template>
  <transition name="index" mode="out-in">
    <div class="home">
      <Nav class="home__nav" />
      <Bio class="home__bio"/>
      <NowPlaying class="home__np"/>
      <Works class="home__works"/>
    </div>
  </transition>
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
    margin-bottom: vr(1);
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
  }
}
.index-leave-active {
  transition: opacity 2000ms;
  .nav,
  .bio,
  .np,
  .works__row:not(.works__row--active) {
    transition: opacity 300ms;
  }
  .works__row--active {
    transition: position 1ms linear 900ms, top 600ms linear 900ms;
    .work__desc,
    .work_role,
    .work_year {
      transition: opacity 300ms linear 600ms;
    }
    .work__title::before {
      transition: all 300ms linear 1500ms;
    }
  }
}
.index-leave-to {
  .nav,
  .bio,
  .np,
  .works__row:not(.works__row--active) {
    opacity: 0 !important;
  }
  .works__row--active {
    position: absolute;
    top: vr(0.5) !important;
    line-height: 1;
    height: vr(1.5);
    .work__desc,
    .work__role,
    .work__year {
      opacity: 0;
    }
    .work__title::before {
      content: 'Index';
      max-height: 100%;
      max-width: 100%;
      margin-right: vr(1);
      opacity: 1;
    }
  }
}
</style>
