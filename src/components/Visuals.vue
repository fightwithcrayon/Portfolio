<template>
  <div :class="`rotator step--${this.index}`" ref="frame">
    <div class="rotator__stage" ref="stage">
      <canvas class="rotator__stage-target" ref="target" />
    </div>
    <div class="rotator__live" v-html="url"></div>
    <div class="rotator__images">
      <img v-for="(img, i) in readyImages" :key="i" class="rotator__image"
        :srcset="imageSrcset(img)"
        sizes="(min-width: 1080px) 50vw, 100vw"
        @load="(e) => _imageLoaded(e, i)" />
    </div>
  </div>
</template>

<script>
import { Application, filters as Filters, Graphics, Sprite } from 'pixi.js'

export default {
  name: 'Visuals',
  props: ['project'],
  data () {
    return {
      app: false,
      height: 0,
      index: 0,
      lines: {},
      mask: false,
      loaded: [],
      loadedIndex: [],
      paused: false,
      stopped: false,
      rotator: false,
      sizes: ['2560', '1920', '1600', '1440', '1280', '960', '800', '720', '640', '480', '360'],
      transition: {
        alpha: 0,
        blur: false,
        direction: 'out',
        outline: false
      },
      verticalSize: 1080,
      vr: 38,
      width: 0
    }
  },
  computed: {
    images () {
      return this.$props.project.images || []
    },
    readyImages () {
      return this.$props.project.images.filter((img, i) => (this.loaded.length >= i))
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
  mounted () {
    this.launchPIXI()
    window.addEventListener('resize', this._resizeCanvas)
  },
  beforeDestroy () {
    this.stopPIXI()
    this.app.destroy()
    window.removeEventListener('resize', this._resizeCanvas)
  },
  methods: {
    _imageLoaded (e, i) {
      if (this.loadedIndex.includes(i)) return
      this.loadedIndex.push(i) // In true Safari form, bug keeps firing loaded event. This way we stop it constantly loading Sprites – and a huge memory leak!
      let src = (e.target.currentSrc) ? e.target.currentSrc : e.target.src
      let sprite = new Sprite.fromImage(src)
      sprite.name = this.loaded.length
      sprite.width = this.$refs.frame.clientWidth
      sprite.height = this.$refs.frame.clientWidth * 0.5625
      sprite.position.x = this.vr
      sprite.position.y = this.vr
      this.loaded.push(sprite)
      if (this.loaded.length === 1) {
        this.launchRotator()
      }
    },
    _resizeCanvas () {
      if (!this.stopped && window.innerWidth < this.verticalSize) {
        this.stopPIXI()
        return
      }
      if (this.stopped && window.innerWidth >= this.verticalSize) {
        this.launchPIXI()
      }
      if (window.innerWidth >= this.verticalSize) {
        this.resizePIXI()
      }
    },
    imageSrc (img) {
      return require(`@/assets/projects/${this.$props.project.slug}/${img}/IMG_1920.png`)
    },
    imageSrcset (img) {
      return this.sizes.map(size => `${require(`@/assets/projects/${this.$props.project.slug}/${img}/IMG_${size}.png`)} ${size}w`)
    },
    imageReadyToDisplay (img) {
      return (this.loaded.includes(img))
    },
    launchPIXI () {
      let frame = this.$refs.frame
      if (this.app) {
        this.app.ticker.start()
        this.stopped = false
        if (this.app.stage.getChildByName(this.index)) {
          this.runRotator()
        } else {
          this.transitionOut()
        }
        return
      } else {
        this.width = (this.project.mobile) ? (frame.clientHeight/ 2): frame.clientWidth
        this.height = (this.project.mobile) ? frame.clientHeight : (frame.clientWidth * 0.5625)
        this.app = new Application({
          width: (frame.clientWidth + (this.vr * 2)),
          height: (this.height + (this.vr * 2)),
          view: this.$refs.target,
          resizeTo: this.$refs.stage,
          transparent: true,
          forceFXAA: true
        })
      }
      this.app.renderer.autoResize = true
      this.transition.blur = new Filters.BlurFilter()
      this.transition.blur.blur = 10
      this.transition.blur.autoFit = false

      let mask = new Graphics()
      mask.beginFill(0x141414)
      mask.drawRect(this.vr, this.vr, frame.clientWidth, this.height)
      mask.endFill()
      this.mask = mask

      let outline = new Graphics()
      outline.beginFill(0x141414)
      outline.lineStyle(1, 0xffffff)
      outline.drawRect(this.vr + 1, this.vr + 1, frame.clientWidth - 1, this.height - 2)
      outline.endFill()
      this.transition.outline = outline

      this.app.stage.mask = mask
    },
    stopPIXI () {
      if (this.rotator) window.clearTimeout(this.rotator)
      if (this.app) this.app.ticker.stop()
      this.stopped = true
    },
    resizePIXI () {
      let frame = this.$refs.frame
      this.width = (this.project.mobile) ? (frame.clientHeight/ 2): frame.clientWidth
      this.height = (this.project.mobile) ? frame.clientHeight : (frame.clientWidth * 0.5625)
      this.app.renderer.view.style.width = (this.width + (this.vr * 2)) + 'px'
      this.app.renderer.view.style.height = (this.height + (this.vr * 2)) + 'px'
    },
    launchRotator () {
      if (!this.app.stage) return false
      this.lines.rightPos = this.width + this.vr
      this.lines.bottomPos = this.height + this.vr

      let line = new Graphics()
      line.name = 'One'
      this.lines.one = line
      this.app.stage.addChild(line)

      line = new Graphics()
      line.name = 'Two'
      this.lines.two = line
      this.app.stage.addChild(line)

      line = new Graphics()
      line.name = 'Three'
      this.lines.three = line
      this.app.stage.addChild(line)

      line = new Graphics()
      line.name = 'Four'
      this.lines.four = line
      this.app.stage.addChild(line)

      this.lines.introStep = 0
      this.lines.horizontalStep = this.lines.rightPos / 100
      this.lines.verticalStep = this.lines.bottomPos / 100

      this.animateIntro()
    },
    animateIntro () {
      if (!this.app.stage || !this.app.ticker.started) return false
      if (this.lines.introStep === 100) {
        this.app.stage.addChild(this.loaded[0])
        this.app.stage.getChildByName(0).filters = [this.transition.blur]
        this.transition.newSlide = this.app.stage.getChildByName(this.index)
        this.transitionIn()
        return
      }
      this.lines.introStep++
      let thisHorizontal = this.lines.horizontalStep * this.lines.introStep
      let thisVertical = this.lines.horizontalStep * this.lines.introStep

      if (thisHorizontal > this.lines.rightPos) thisHorizontal = this.lines.rightPos
      if (thisVertical > this.lines.bottomPos) thisVertical = this.lines.bottomPos

      this.lines.one.clear()
      this.lines.one.lineStyle(1, 0xffffff)
      this.lines.one.moveTo(this.vr, this.vr + 1)
      this.lines.one.lineTo(thisHorizontal, this.vr + 1)

      this.lines.two.clear()
      this.lines.two.lineStyle(1, 0xffffff)
      this.lines.two.moveTo(this.lines.rightPos, this.vr)
      this.lines.two.lineTo(this.lines.rightPos, thisVertical)

      this.lines.three.clear()
      this.lines.three.lineStyle(1, 0xffffff)
      this.lines.three.moveTo(this.lines.rightPos, this.lines.bottomPos - 1)
      this.lines.three.lineTo((this.lines.rightPos - thisHorizontal), this.lines.bottomPos - 1)

      this.lines.four.clear()
      this.lines.four.lineStyle(1, 0xffffff)
      this.lines.four.moveTo(this.vr + 1, this.lines.bottomPos)
      this.lines.four.lineTo(this.vr + 1, this.lines.bottomPos - thisVertical)
      this.app.renderer.render(this.app.stage)
      requestAnimationFrame(this.animateIntro)
    },
    runRotator () {
      this.rotator = window.setTimeout(() => {
        this.transition.exitingSlide = this.app.stage.getChildByName(this.index)
        this.index++
        if (this.index >= this.images.length) {
          this.index = 0
        }
        if (this.loaded.length >= this.index) {
          this.transitionOut()
        } else {
          this.paused = true
        }
      }, 3000)
    },
    transitionOut () {
      if (!this.app.stage || !this.app.ticker.started) return false
      if (this.transition.alpha <= 0) {
        this.app.stage.removeChildren()
        this.lines = null
        this.app.stage.addChild(this.transition.outline)
        this.app.stage.addChild(this.loaded[this.index])
        this.transition.newSlide = this.app.stage.getChildByName(this.index)
        this.transition.newSlide.filters = [this.transition.blur]
        this.transitionIn()
        return
      }
      this.transition.exitingSlide.alpha = this.transition.alpha
      this.transition.alpha -= 0.01

      this.transition.blur.blur += 0.1
      this.app.renderer.render(this.app.stage)
      requestAnimationFrame(this.transitionOut)
    },
    transitionIn () {
      if (!this.app.stage || !this.app.ticker.started) return false
      if (this.transition.alpha >= 1) {
        this.transition.blur.blur = 0
        this.app.renderer.render(this.app.stage)
        requestAnimationFrame(this.runRotator)
        return
      }
      this.transition.newSlide.alpha = this.transition.alpha
      this.transition.alpha += 0.01

      if (this.transition.blur.blur > 0) this.transition.blur.blur -= 0.1
      this.app.renderer.render(this.app.stage)
      requestAnimationFrame(this.transitionIn)
    }
  },
  watch: {
    paused: function (isPaused, oldPauseState) {
      if (isPaused === false && oldPauseState === true) this.transitionOut()
    }
  }
}
</script>

<style lang="scss">
.rotator {
  @media (min-width: $xl) {
    position: absolute;
    top: 0;
    left: vr(-1);
    width: 100%;
    transform: translateY(-50%);
  }
  &__image {
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
  &__stage {
    display: none;
    @media (min-width: $xl) {
      display: block;
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
