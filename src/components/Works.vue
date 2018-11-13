<template>
  <div class="works">
    <div class="works__row" v-for="(project, i) in projects" :key="i" @click="goTo(project)">
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
      projects: data
    }
  },
  methods: {
    goTo (project) {
      this.$router.push({ path: `/project/${project.slug}` })
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
    &-cell {
      display: table-cell;
      vertical-align: middle;
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
</style>
