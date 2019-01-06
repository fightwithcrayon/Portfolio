<template>
  <div :class="`rotator step--${this.index}`">
    <img v-for="(img, i) in readyImages" :key="i" class="rotator__image" :class="{'rotator__image--loaded': imageReadyToDisplay(img)}"
      :src="imageSrc(img)"
      :srcset="imageSrcset(img)"
      sizes="(min-width: 1080px) 50vw, 100vw"
      @load="_imageLoaded(img)" />
  </div>
</template>

<script>

export default {
  name: 'Visuals',
  props: ['project'],
  data () {
    return {
      index: 0,
      loaded: 0,
      visible: false,
      ready: [],
      sizes: ['2560', '1920', '1600', '1440', '1280', '960', '800', '720', '640', '480', '360']
    }
  },
  computed: {
    images () {
      return this.$props.project.images || []
    },
    readyImages () {
      return this.$props.project.images.filter((img, i) => (this.ready.length >= i))
    }
  },
  methods: {
    _imageLoaded (img) {
      this.ready.push(img)
    },
    imageSrc (img) {
      return require(`@/assets/projects/${this.$props.project.slug}/${img}/IMG_1920.png`)
    },
    imageSrcset (img) {
      return this.sizes.map(size => `${require(`@/assets/projects/${this.$props.project.slug}/${img}/IMG_${size}.png`)} ${size}w`)
    },
    imageReadyToDisplay (img) {
      return (this.ready.includes(img))
    }
  }
}
</script>

<style lang="scss">
.rotator {
  position: relative;
  display: flex;
  flex-direction: column;
  &__image {
    width: 100%;
    opacity: 0;
    background-color: transparent;
    margin: 0 0 vr(0.5);
    transition: opacity 1s ease-in;
    &--loaded {
      opacity: 1;
    }
  }
}
</style>
