<template>
  <div class="listings">

    <router-link tag="article" :to="`/${work.slug}`" v-for="(work, i) in works" :key="i" 
      :class="`listings__card ${work.starred ? 'listings__card--wide' : ''} card`">

      <img class="card__image" :src="work.image.src" />
      <h1 class="card__title">{{work.title}}</h1>
      <p class="card__year">{{work.year}}</p>

    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Listings',
  data () {
    return {
      works: [{
        title: 'Crack in the Road',
        year: '2010 – 2017',
        image: {
          src: require('@/assets/crackintheroad.png'),
          srcset: ''
        }
      },
      {
        title: 'Unrecorded',
        year: '2014',
        image: {
          src: require('@/assets/unrecorded.png'),
          srcset: ''
        }
      },
      {
        title: 'Sheffield Bricktropolis',
        year: '2018',
        image: {
          src: '',
          srcset: ''
        },
        starred: true
      }]
    }
  }
}
</script>
<style lang="scss">
.listings {
  @include wrapper;
  @include grid;
  margin-top: vr(-3);
  &__card {
    grid-column: 1 / 5;
    @media screen and (min-width: $desktop) {
      &:nth-child(odd) {
        grid-column: 1 / 7;
      }
      &:nth-child(even) {
        grid-column: 7 / 13;
      }
      &--wide {
        grid-column: 1 / 13 !important;
      }
    }
  }
}
.card {
  padding: 0 0 vr(1);
  &__title {
    margin: 0 0 vr(0.5);
  }
  &__year {
    margin: 0 0 vr(1);
  }
  &__image {
    width: 100%;
    margin: 0 0 vr(1);
    background-color: $peach;
    height: col(6);
  }
}
</style>
