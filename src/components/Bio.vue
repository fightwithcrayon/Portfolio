<template>
  <div class="bio">
    <p class="bio__paragraph">Andrew is a UK developer, working across Sheffield and London. Focused on creating eye catching <span class="bio__emphasis">yet highly performant</span> digital projects, he has worked with international corporations, consumer brands, regional governments, and visual artists.</p>
    <p class="bio__paragraph">Founded award-winning music website Crack in the Road in 2010.</p>
    <p class="bio__paragraph">
      Get in touch:
      <a class="bio__link" href="mailto:contact@andrewthomashill.co.uk">English</a> /
      <a class="bio__link" href="mailto:habla@andrewthomashill.co.uk">Español</a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Bio'
}
</script>

<style lang="scss">
.bio {
  @media (min-width: $md) {
    padding-right: 25%;
  }
  @media (min-width: $lg) {
    padding-right: vr(1);
  }
  @media (min-width: $xl) {
    padding-right: 25%;
  }
  &__paragraph:not(:last-child) {
    margin-bottom: vr(0.5);
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
