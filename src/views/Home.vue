<template>
  <transition name="index" mode="out-in" @after-leave="beforeEnter" appear>
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
  },
  methods: {
    beforeEnter () {
      console.log('Fired')
      this.$root.$emit('readyForScroll')
    }
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
    .work__desc,
    .work_role,
    .work_year {
      transition: opacity 300ms;
    }
    .work__title {
      transition: transform 300ms linear 1500ms;
    }
    .work__title::before,
    .work__title::after {
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
    animation-play-state: running;
    .work__desc,
    .work__role,
    .work__year {
      opacity: 0;
    }
    .work__title {
      transform: translateX(vr(1));
    }
    .work__title::before,
    .work__title::after {
      max-width: 100%;
    }
    .work__title::after {
      max-height: 100%;
      transform: translateX(vr(-1));
      opacity: 1;
    }
  }
}
.index-enter-active {
  transition: opacity 500ms linear 300ms;
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
    transition: opacity 300ms linear 300ms;
  }
  .works__row {
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        transition-delay: calc(1ms * (500 + #{$i * 50}));
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
