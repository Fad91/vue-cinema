<template>
  <div class="wrapper">
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    <FilmsList :films="sortedFilms"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FilmsList from "@/components/FilmsList.vue";
import {mapGetters} from 'vuex';

export default {
  name: "HomeView",
  components: { FilmsList },
  data() {
    return {
      sortOptions: [],
      selectedSort: ''
    }
  },
  computed: {
    ...mapGetters({
      films: 'films/FILMS'
    }),
    sortedFilms() {
      return this.films.filter(film => film.genre.includes(this.selectedSort))
    }
  },
  methods: {
    getSortOptions() {
      return this.sortOptions = this.films.map(item => item.genre)
    },
  },
  mounted() {
    this.getSortOptions();
  }
};
</script>
