<template>
  <div class="bio">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et elementum dolor. Fusce nec lacus dapibus, euismod ex quis, dignissim lacus. Suspendisse in luctus est. Sed lorem lorem, facilisis ut eros vitae, elementum malesuada nisl. Nunc eu arcu sed dui finibus aliquet at id urna. Proin cursus lorem vitae dolor faucibus cursus. Cras eu semper turpis.
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
}
</style>
