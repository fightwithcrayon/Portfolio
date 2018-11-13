<template>
  <div class="project">
    <Nav class="project__nav" :child="project.title" />
    <div class="project__info">
      <a :href="project.url" v-if="project.url">Visit live site</a>
    </div>
    <div class="project__visual">
      <iframe :src="project.url" v-if="project.type === 'embed'" class="project__visual-embed" />
    </div>
  </div>
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
    }
  }
}
</script>

<style lang="scss">
.project {
  display: grid;
  grid-template-areas:
    "nav visual"
    "info visual";
  margin: vr(0.5);
  width: 100%;
  @media (min-width: $md) {
    margin: 0;
  }
  &__info {
    grid-area: info;
    width: 50%;
  }
  &__visual {
    grid-area: visual;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50vw;
    background-color: grey;
  }
}
.project__visual-embed {
  border: none;
  box-shadow: none;
  height: 200vh;
  width: 100vw;
  transform: scale(0.5) translate(-50%, -50%);
}
</style>
