<template>
    <div class="works">
      <div v-for="(project, i) in projects" :key="i" :class="`works__row ${selected === i ? 'works__row--active' : ''}`" @click="goTo(project.slug, i)">
        <h2 class="works__row-cell work__title" v-html="staggerOutput(project.title)" />
        <p class="works__row-cell work__desc" v-html="staggerOutput(project.desc)" />
        <p class="works__row-cell work__role" v-html="staggerOutput(project.role)" />
        <p class="works__row-cell work__year" v-html="staggerOutput(project.year)" />
      </div>
    </div>
  </transition>
</template>

<script>
import data from '@/data/projects.js'
export default {
  name: 'Works',
  data () {
    return {
      projects: data,
      selected: false
    }
  },
  methods: {
    goTo (slug, index) {
      this.selected = index
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
  &:hover > .works__row:not(:hover) {
    opacity: 0.4;
  }
  &__row {
    display: table-row;
    height: vr(1.5);
    cursor: pointer;
    &-cell {
      display: table-cell;
      vertical-align: middle;
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
  .work__title::before {
    content: 'Index';
    display: flex;
    max-height: 0px;
    max-width: 0px;
    margin-right: 0px;
    opacity: 0;
    overflow: hidden;
  }
}
</style>
