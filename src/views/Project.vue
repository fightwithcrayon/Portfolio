<template>
  <transition name="fade" mode="out-in" @after-enter="_afterEnter" @after-appear="_afterEnter">
    <div class="project">
      <Nav class="project__nav" :child="project.title" />
      <div class="project__info" v-html="info"></div>
      <div class="project__notes" v-html="notes" />
      <Visuals class="project__visual" :project="project" v-if="pageReady" />
    </div>
  </transition>
</template>

<script>
import projects from '@/data/projects.js'
import Nav from '@/components/Nav.vue'
import Visuals from '@/components/Visuals.vue'

export default {
  name: 'Project',
  components: {
    Nav, Visuals
  },
  data () {
    return {
      pageReady: false
    }
  },
  computed: {
    project () {
      return projects.filter(p => (p.slug === this.$route.params.slug))[0]
    },
    info () {
      if (!this.project.info) return
      if (typeof this.project.info === 'string') return `<p>${this.project.info}</p>`
      return this.project.info.map(n => `<p>${n}</p>`).join('')
    },
    notes () {
      if (!this.project.notes) return
      let info = `<h2>Development notes</h2>`
      let notes = this.project.notes.map(n => `<li>${n}</li>`).join('')
      info += `<ul>${notes}</ul>`
      if (this.project.url) {
        info += typeof this.project.url === 'string'
          ? `<a href="${this.project.url}" target="_blank">Visit live site</a>`
          : Object.keys(this.project.url).map(k => `<a href="${this.project.url[k]}" target="_blank">${k}</a>`).join(' / ')
      }
      return info
    }
  },
  methods: {
    _afterEnter () {
      this.pageReady = true
    }
  }
}
</script>

<style lang="scss">
.project {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  width: 100%;
  min-height: calc(100vh - #{vr(1)});
  box-sizing: border-box;
  @media (min-width: $xl) {
    display: grid;
    grid-template-areas:
      "nav nav"
      "info visual"
      "notes visual";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content 1fr;
  }
  &__info {
    grid-area: info;
    margin-bottom: vr(1);
    width: 100%;
    p {
      margin-bottom: 0.5em;
    }
  }
  &__notes {
    grid-area: notes;
    margin-bottom: vr(1);
    width: 100%;
  }
  &__visual {
    grid-area: visual;
    width: 100%;
    @media (min-width: $xl) {
      position: fixed;
      top: vr(2);
      left: calc(50% + #{vr(1)});
      right: vr(1);
      width: auto;
    }
  }
}
.project__visual-embed {
  border: none;
  box-shadow: none;
  width: 100%;
  height: 100vh;
}
.fade-enter-active {
  transition: opacity 300ms linear 1800ms;
  position: fixed;
  top: vr(0.5);
  left: vr(0.5);
  right: vr(0.5);
  width: auto;
  @media (min-width: $md) {
    left: vr(1);
    right: vr(1);
  }
  .project__info,
  .project__visual,
  .project__notes {
    transition: opacity 300ms linear 2000ms;
  }
}
.fade-enter {
  opacity: 0;
  .project__info,
  .project__visual,
  .project__notes {
    opacity: 0;
  }
}
</style>
