<template>
  <div :class="`image ${loaded && 'image--loaded'} ${visible && 'image--visible'}`" v-observe-visibility="{callback: _onVisible, once: true}">
    <img class="image__img" :src="imageSrc" :srcset="imageSrcset" @load="_onLoad" sizes="(min-width: 1080px) 50vw, 100vw" />
  </div>
</template>

<script>

export default {
  name: 'Img',
  props: ['path'],
  data () {
    return {
      loaded: false,
      visible: false,
      sizes: ['2560', '1920', '1600', '1440', '1280', '960', '800', '720', '640', '480', '360']
    }
  },
  computed: {
    imageSrc () {
      return require(`@/assets/projects/${this.$props.path}/IMG_1920.png`)
    },
    imageSrcset () {
      return this.sizes.map(size => `${require(`@/assets/projects/${this.$props.path}/IMG_${size}.png`)} ${size}w`)
    }
  },
  methods: {
    _onLoad (e) {
      this.loaded = true
      this.$emit('load', e)
    },
    _onVisible (e) {
      if (e) {
        console.log('Visible', this.$props.path)
        this.visible = true
      }
    }
  }
}
</script>

<style lang="scss">
.image {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  border: 1px solid #ffffff;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    opacity: 0;
    transform: translateY(vr(1));
    transition: all 0.3s ease-in;
  }
}
.image--visible {
  opacity: 1;
}
.image--visible.image--loaded {
  .image__img {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
