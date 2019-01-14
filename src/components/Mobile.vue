<template>
  <div class="mobile">
    <div :class="`mobile__images`">
      <img v-for="(img, i) in images" :key="i" class="rotator__image"
        :srcset="imageSrcset(img)"
        sizes="(min-width: 1080px) 50vw, 100vw" />
    </div>
    <div class="mobile__live" v-html="url"></div>
  </div>
</template>

<script>
export default {
  name: 'Mobile',
  props: ['project'],
  data () {
    return {
      sizes: ['1125']
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
        return `<h2 class="project__heading project__url-title">Go to</h2>${url}`
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
  &__images {
    width: 100%;
    background-color: transparent;
    display: block;
    margin: 0 0 vr(0.5);
    @media (min-width: $xl) {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
  &__live {
    line-height: 1.45;
    margin-bottom: vr(1);
    @media (min-width: $xl) {
      text-align: right;
      margin: vr(-0.5) vr(-1) 0 0;
    }
  }
}
</style>
