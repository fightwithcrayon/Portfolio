<template>
  <div class="bio">
    <p class="bio__paragraph">Andrew is a UK based developer. He has produced creative, yet <span class="bio__emphasis">highly performant</span>, projects for international corporations, consumer brands, regional governments, and visual artists.</p>
    <p class="bio__paragraph">Co-founded award-winning culture site Crack in the Road in 2010.</p>
    <div class="bio__contact">
      <div class="bio__contact-heading">Get in touch:</div>
      <a class="bio__link" href="mailto:contact@andrewthomashill.co.uk">English</a> /
      <a class="bio__link" href="mailto:habla@andrewthomashill.co.uk">Español</a> /
      <a class="bio__link" href="https://github.com/fightwithcrayon" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Bio'
}
</script>

<style lang="scss">
.bio {
  -ms-grid-row: 2;
  @media (min-width: $md) {
    padding-right: 20%;
  }
  @media (min-width: $lg) {
    padding-right: vr(1);
  }
  @media (min-width: $xl) {
    padding-right: 20%;
  }
  &__paragraph {
    margin-bottom: vr(0.5);
  }
  &__contact {
    &-heading {
      display: block;
      @media (min-width: $sm) {
        display: inline-block;
        margin-right: 0.5em;
      }
    }
  }
  &__emphasis {
    @include link_underline;
  }
  &__link {
    display: inline-block;
    font-weight: bold;
  }
}
</style>
