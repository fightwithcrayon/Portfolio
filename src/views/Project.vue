<template>
  <transition name="fade" mode="out-in">
    <div class="project">
      <Nav class="project__nav" :child="project.title" />
      <div class="project__info" v-html="info"></div>
      <div class="project__notes" v-html="notes" />
      <div class="project__visual"></div>
    </div>
  </transition>
</template>

<script>
import projects from '@/data/projects.js'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Project',
  components: {
    Nav
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
  }
}
</script>

<style lang="scss">
.project {
  display: flex;
  flex-direction: column;
  margin: vr(0.5);
  width: 100%;
  min-height: calc(100vh - #{vr(1)});
  @media (min-width: $md) {
    margin: 0;
  }
  &__info {
    margin-bottom: vr(1);
  }
  &__notes {
    margin-bottom: vr(1);
  }
  &__visual {
    width: 100vw;
    margin-left: vr(-1);
    background-color: grey;
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
  position: absolute;
  top: vr(0.5);
  left: vr(1);
  width: auto;
  bottom: vr(0.5);
  right: vr(1);
}
.fade-enter {
  opacity: 0;
}
</style>
