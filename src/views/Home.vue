<template>
  <transition name="index" mode="out-in" @after-leave="beforeEnter" appear>
    <div class="home test index-leave-active index-leave-t">
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
  },
  methods: {
    customHook () {
      console.log('hook fired')
    },
    beforeEnter () {
      this.$root.$emit('readyForScroll')
    }
  }
}
</script>

<style lang="scss">
.home {
  @media (min-width: $lg) {
    display: grid;
    grid-template:
      "nav np" vr(1)
      "bio np" min-content
      "works works" min-content;
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
  @include target_ie11 () {
    transition: none;
  }
  .nav,
  .bio,
  .np,
  .works__row:not(.works__row--active) {
    transition: opacity 300ms;
    @include target_ie11 () {
      transition: none;
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
}
.index-enter-active {
  transition: opacity 500ms linear 300ms;
  @include target_ie11 {
    transition: none;
  }
  position: fixed;
  top: vr(0.5);
  left: vr(0.5);
  right: vr(0.5);
  width: auto;
  @media (min-width: $md) {
    left: vr(1);
    right: vr(1);
  }
  .home__bio,
  .home__np,
  .works__row {
    transition: opacity 300ms ease-in 300ms;
    @include target_ie11 () {
      transition: none;
    }
  }
  .works__row {
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        transition-delay: calc(1ms * (500 + #{$i * 100}));
      }
    }
  }
}
.index-enter {
  .home__bio,
  .home__np,
  .works__row {
    opacity: 0;
  }
}
</style>
