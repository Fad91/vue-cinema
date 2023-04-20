<template>
  <div class="film relative px-2 py-6 text-center bg-gray-500 rounded-xl">
    <img class="block mx-auto mb-5 w-28 h-28" :src="film.img" />
    <h3 class="film__title text-xl text-white font-bold mb-3">{{ film.name }}</h3>
    <p class="film-genre text-gray-300 mb-3">{{ film.genre }}</p>
    <router-link :to="{ name: 'film', params: { id: film.id } }" class="w-32 flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200"
      >Подробнее</router-link
    >
  </div>
</template>

<script>
export default {
  name: "FilmsItem",
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss"></style>
