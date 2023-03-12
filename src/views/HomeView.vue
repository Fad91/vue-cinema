<template>
  <div class="wrapper">
    <NavBar></NavBar>
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    <FilmsList :films="sortedFilms"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import FilmsList from "@/components/FilmsList.vue";
import {mapGetters} from 'vuex';

export default {
  name: "HomeView",
  components: {
    NavBar, FilmsList
  },
  data() {
    return {
      sortedFilms: [],
      sortOptions: [],
      selectedSort: ''
    }
  },
  computed: {
    ...mapGetters({
      films: 'films/FILMS'
    }),
    sortFilms() {
      return this.sortedFilms = this.films.filter(film => film.genre.includes(this.selectedSort))
    }
  },
  methods: {
    getSortOptions() {
      return this.sortOptions = this.films.map(item => item.genre)
    },
  },
  mounted() {
    this.getSortOptions();
    this.sortedFilms = this.films;
  }
};
</script>
