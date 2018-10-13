<template>
  <div class="listings">

    <router-link tag="article" :to="`/${work.slug}`" v-for="(work, i) in works" :key="i" 
      :class="`listings__card ${work.starred ? 'listings__card--wide' : ''} card`">

      <h1 class="card__title">{{work.title}}</h1>
      <p class="card__year">{{work.year}}</p>
      <img class="card__image" />

    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Listings',
  data () {
    return {
      works: [{
        title: 'Title',
        year: '2018',
        image: {
          src: '',
          srcset: ''
        }
      },
      {
        title: 'Title',
        year: '2018',
        image: {
          src: '',
          srcset: ''
        }
      },
      {
        title: 'Title',
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
  background-color: #6A9AA2;
  padding: 0 0 vr(1);
  &__title {

  }
  &__year {
    
  }
}
</style>
