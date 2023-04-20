<template>
  <div class="films-list">
    <FilmsItem v-for="film in films" :key="film.id" :film="film"></FilmsItem>
  </div>
</template>

<script>
import FilmsItem from "@/components/FilmsItem.vue";

export default {
  name: "FilmsList",
  components: { FilmsItem },
  props: {
    films: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
