<template>
  <div :class="`image ${loaded && 'image--loaded'} ${visible && 'image--visible'} ${mobile ? 'image--mobile' : 'image--desktop'}`" v-observe-visibility="{callback: _onVisible, once: true}">
    <img class="image__img" :src="imageSrc" :srcset="imageSrcset" @load="_onLoad" :sizes="mobile ? '(min-width: 1080px) 25vw, 100vw' : '(min-width: 1080px) 50vw, 100vw'" />
  </div>
</template>

<script>

export default {
  name: 'Img',
  props: ['path', 'mobile'],
  data () {
    return {
      loaded: false,
      visible: false,
      desktopSizes: ['1920', '2560', '1600', '1440', '1280', '960', '800', '720', '640', '480', '360'],
      mobileSizes: ['1242', '828', '414', '207']
    }
  },
  computed: {
    sizes () {
      return this.mobile ? this.mobileSizes : this.desktopSizes
    },
    imageSrc () {
      return require(`@/assets/projects/${this.$props.path}/IMG_${this.sizes[0]}.png`)
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
        this.visible = true
      }
    }
  }
}
</script>

<style lang="scss">
.image {
  width: 100%;
  position: relative;
  border: 1px solid #ffffff;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  &__img {
    display: block;
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
.image--desktop {
  .image__img {
    width: 100%;
  }
}
.image--mobile {
  height: 100%;
  width: auto;
  border: none;
  .image__img {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    @media (min-width: $xl) {
      width: auto;
    }
  }
}
</style>
