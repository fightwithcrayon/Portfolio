<template>
  <div class="listings">

    <router-link tag="article" :to="`/${work.slug}`" v-for="(work, i) in works" :key="i"
      :class="`listings__card ${work.starred ? 'listings__card--wide' : ''} card`">

      <img class="card__image" :src="work.image.src" />
      <h1 class="card__title">{{work.title}}</h1>
      <p class="card__role">{{work.role}}</p>
      <p class="card__year">{{work.year}}</p>
      <ul class="card__icons">
        <li class="card__icons-icon" v-for="(icon, i) in icons" :key="i">
          <img :src="types[icon].icon" />
        </li>
      </ul>

    </router-link>

  </div>
</template>

<script>
import Works from '@/projects.js'
import Types from '@/types.js'

export default {
  name: 'Listings',
  data () {
    return {
      works: Works,
      types: Types
    }
  }
}
</script>
<style lang="scss">
.listings {
  @include wrapper;
  display: grid;
  grid-template-areas: "a";
  grid-auto-columns: 1fr;
  grid-gap: vr(1);
  margin-top: vr(-3);
  z-index: 1;
  @media screen and (min-width: $desktop) {
    grid-template-areas: "a  b";
  }
  &__card {
    @media screen and (min-width: $desktop) {
      &--wide {
        grid-column: 1 / 3;
      }
    }
  }
}
.card {
  display: grid;
  grid-template-areas: 
    "image image image"
    "title gap year"
    "role gap year";
  padding: 0 0 vr(1);
  &__title {
    grid-area: title;
    @include h2;
    margin: 0 0 vr(0.5);
  }
  &__role {
    grid-area: role;
    @include h3;
    margin: 0 0 vr(0.5);
  }
  &__year {
    grid-area: year;
    @include h4;
    margin: 0 0 vr(1);
  }
  &__image {
    grid-area: image;
    width: 100%;
    margin: 0 0 vr(1);
    background-color: $peach;
    height: col(6);
  }
}
</style>
