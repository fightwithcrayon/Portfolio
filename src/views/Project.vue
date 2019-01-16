<template>
  <transition name="fade" mode="out-in"
    @after-enter="_afterEnter" @after-appear="_afterEnter">
    <div class="project">
      <Nav class="project__nav" :child="project.title" />
      <div class="project__info" v-html="info"></div>
      <div class="project__notes" v-html="notes" v-if="notes" />
      <div class="project__visual" v-if="pageReady" >
        <Mobile :project="project" v-if="project.images && project.mobile" />
        <Slider :project="project" v-else-if="project.images" />
      </div>
    </div>
  </transition>
</template>

<script>
import Mobile from '@/components/Mobile.vue'
import Nav from '@/components/Nav.vue'
import Slider from '@/components/Slider.vue'
const projects = require('@/data/projects.js')

export default {
  name: 'Project',
  components: {
    Nav, Slider, Mobile
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
      let heading = `<h2 class="project__heading project__info-title">Intro</h2>`
      return (typeof this.project.info === 'string') ? `${heading}<p>${this.project.info}</p>` : heading + this.project.info.map(n => `<p>${n}</p>`).join('')
    },
    notes () {
      let notes = this.project.notes || this.project.technology || false
      if (!notes) return false
      let title = `<h2 class="project__heading project__notes-title">${this.project.notes ? 'Development notes' : 'Technology Overview'}</h2>`
      return `${title} <ul class="project__notes-list ${this.project.technology && 'project__notes-tech'}">${notes.map(n => `<li>${n}</li>`).join('')}</ul>`
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.pageReady = (!from.name)
    })
  },
  methods: {
    _afterEnter () {
      this.pageReady = true
    }
  }
}
</script>

<style lang="scss">
.nav {
  grid-area: nav; // Keeps PostCSS IE transpiler happy
}
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
      "nav visual"
      "info visual"
      "notes visual";
    grid-template-rows: min-content min-content 1fr;
    grid-template-columns: 1fr 1fr;
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
    &-list {
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: vr(0.5);
      }
    }
    &-tech {
      @media (min-width: $md) {
        list-style: disc;
        padding-left: vr(1);
      }
    }
  }
  &__visual {
    width: 100%;
    @media (min-width: $xl) {
      grid-area: visual;
      position: fixed;
      top: 50%;
      left: calc(50% + #{vr(1)});
      right: vr(1);
      transform: translateY(-50%);
      width: auto;
    }
  }
  &__heading {
    font-style: italic;
    opacity: 0.6;
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
.fade-leave-active {
  transition: opacity 300ms linear;
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
  .project__info,
  .project__visual,
  .project__notes {
    transition: opacity 300ms linear;
  }
}
.fade-leave-to {
  opacity: 0;
  .project__info,
  .project__visual,
  .project__notes {
    opacity: 0;
  }
}
</style>
