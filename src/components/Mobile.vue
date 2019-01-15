<template>
  <div class="mobile">
    <div :class="`mobile__images`">
      <Img v-for="(img, i) in images" :key="i" class="mobile__images-image" :path="`${project.slug}/${img}`" @load="(e) => _imageLoaded(e, i)" :mobile="true" />
    </div>
    <div class="mobile__live" v-html="url"></div>
  </div>
</template>

<script>
import Img from '@/components/Img.vue'
export default {
  name: 'Mobile',
  props: ['project'],
  components: {
    Img
  },
  data () {
    return {
    }
  },
  computed: {
    images () {
      return this.project.images || []
    },
    url () {
      if (this.project.url) {
        let url = typeof this.project.url === 'string'
          ? `<a href="${this.project.url}" target="_blank">Live site</a>`
          : Object.keys(this.project.url).map(k => `<a href="${this.project.url[k]}" target="_blank">${k}</a>`).join(' / ')
        return `<h2 class="project__heading project__url-title">Find on</h2>${url}`
      }
      return ''
    }
  },
  methods: {
    imageSrc (img) {
      return require(`@/assets/projects/${this.project.slug}/${img}/IMG_1125.jpg`)
    },
    imageSrcset (img) {
      return this.sizes.map(size => `${require(`@/assets/projects/${this.project.slug}/${img}/IMG_${size}.jpg`)} ${size}w`)
    }
  }
}
</script>

<style lang="scss">
.mobile {
  height: auto;
  max-height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-align: center;
  @media (min-width: $xl) {
    height: 50vh;
    flex-direction: column;
    justify-content: center;
  }
  &__images {
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: block;
    margin-bottom: vr(0.5);
  }
  &__live {
    line-height: 1.45;
    margin-bottom: vr(0.5);
  }
}
</style>
