<template>
  <div class="wrapper">
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    <my-input v-model="searchFilmQuery" placeholder="Поиск фильма"></my-input>
    <FilmsList :films="sortedAndSearchedFilms"/>
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
      selectedSort: '',
      searchFilmQuery: '',
      sortedandSearchedFilms: []
    }
  },
  computed: {
    ...mapGetters({
      films: 'films/FILMS'
    }),
    sortedFilms() {
      return this.sortedandSearchedFilms.filter(film => film.genre.includes(this.selectedSort));
    },
    sortedAndSearchedFilms() {
      return this.sortedFilms.filter(film => film.name.toLowerCase().includes(this.searchFilmQuery.toLowerCase()))
    }
  },
  methods: {
    getSortOptions() {
      return this.sortOptions = this.films.map(item => item.genre)
    },
  },
  mounted() {
    this.getSortOptions();
    this.sortedandSearchedFilms = [...this.films];
  }
};
</script>
