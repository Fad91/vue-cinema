<template>
  <div class="film">
    <img :src="film.img" width="150" height="100">
    <h3 class="film__title">{{ film.name }}</h3>
    <p class="film-genre">{{ film.genre }}</p>
    <router-link :to="{ name:'film', params: { id: film.id } }" class="film">Подробнее</router-link>
  </div>
</template>

<script>

export default {
  name: 'FilmsItem',
  props: {
    film: {
      type: Object,
      required: true
    }
  }  
}

</script>
<style lang="scss">
  
</style>