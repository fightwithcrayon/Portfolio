<template>
  <div class="works">
    <div
      v-for="(project, i) in projects" :key="i" :ref="i"
      :class="`works__row ${selected === i ? 'works__row--active' : ''} ${!project.slug ? 'works__row--disabled' : ''}`"
      :style="`${selected === i ? `--offsetTop: -${pinnedAt.top}px; top: ${pinnedAt.top}px; left: ${pinnedAt.left}px;` : ''}`"
      @click="goTo(project.slug, i)">
      <h2 class="works__row-cell work__title" v-html="staggerOutput(project.title)" />
      <p class="works__row-cell work__desc" v-html="staggerOutput(project.desc)" />
      <p class="works__row-cell work__role" v-html="staggerOutput(project.role)" />
      <p class="works__row-cell work__year" v-html="staggerOutput(project.year)" />
    </div>
  </div>
</template>

<script>
import data from '@/data/projects.js'
export default {
  name: 'Works',
  data () {
    return {
      pinnedAt: {
        top: 0,
        left: 0
      },
      projects: data,
      selected: false
    }
  },
  methods: {
    goTo (slug, i) {
      if (!slug) return false
      this.pinnedAt = {
        top: this.$refs[i][0].offsetTop - window.scrollY,
        left: this.$refs[i][0].offsetLeft
      }
      this.selected = i
      this.$nextTick(() => {
        this.$router.push({ path: `/project/${slug}` })
      })
    },
    staggerOutput (data) {
      if (!data || typeof data === 'string') return data
      let output = ''
      Object.keys(data).forEach(d => {
        output += `<span class="works__row-field works__row-field--${d}">${data[d]}</span>`
      })
      return output
    }
  }
}
</script>

<style lang="scss">
.works {
  display: table;
  width: 100%;
  &__row {
    display: table-row;
    height: vr(1.5);
    cursor: pointer;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
    &-cell {
      display: table-cell;
      //vertical-align: middle;
      p, h2 {
        display: inline-block;
        @include link_underline;
      }
    }
    &-field {
      display: none;
      white-space: pre;
      &--basic {
        display: inline-block;
      }
      @media (min-width: $sm) {
        &--sm {
          display: inline-block;
        }
      }
      @media (min-width: $xl) {
        &--xl {
          display: inline-block;
        }
      }
    }
  }
}
.work {
  &__desc {
    display: none;
    @media (min-width: $lg) {
      display: table-cell;
    }
  }
  &__role {
    display: none;
    @media (min-width: $sm) {
      display: table-cell;
    }
  }
  &__year {
    text-align: right;
  }
}
.works__row--active {
  animation: 1s becomeNavLegacy 300ms;
  animation-play-state: paused;
  animation-fill-mode: forwards;
  width: 100%;
  opacity: 1 !important;
  @supports (transform: translateY(calc(var(--offsetTop) + #{vr(0.5)}))) {
    animation-name: becomeNav;
  }
  .work__title::before,
  .work__title::after {
    content: 'Index';
    display: inline-block;
    max-height: 0px;
    max-width: 0px;
    margin-right: 0px;
    opacity: 0;
    overflow: hidden;
  }
  .work__title::after {
    position: fixed;
    left: 0;
    top: 0;
  }
}
.works__row--disabled:hover {
  opacity: 0.4;
  cursor: default;
}

.index-leave-active {
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

@keyframes becomeNavLegacy {
  0% {
    position: fixed;
    line-height: vr(1);
  }
  99% {
    position: fixed;
    top: vr(0.5);
    line-height: vr(1);
  }
  100% {
    position: fixed;
    top: vr(0.5);
    line-height: vr(1);
  }
}
@keyframes becomeNav {
  0% {
    position: fixed;
    line-height: vr(1);
  }
  99% {
    position: fixed;
    transform: translateY(calc(var(--offsetTop) + #{vr(0.5)}));
    line-height: vr(1);
  }
  100% {
    position: fixed;
    transform: translateY(calc(var(--offsetTop) + #{vr(0.5)}));
    line-height: vr(1);
  }
}
</style>
