<template>
  <div class="wrapper">
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    <my-input v-model="searchFilmQuery" placeholder="Поиск фильма"></my-input>
    <FilmsList :films="paginatedFilms"/>
    <ul class="pagination">
      <li class="pagination__item" v-for="(page,index) in pages" :key="index" @click="turnThePage(page)">{{ page }}</li>
    </ul>
    <!-- <my-pagination :filmsList="films" :filmsPerPage="filmsPerPage"></my-pagination> -->
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
      paginatedFilmsArray: [],
      filmsPerPage: 4,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters({
      films: 'films/FILMS'
    }),
    sortedFilms() {
      return this.paginatedFilmsArray.filter(film => film.genre.includes(this.selectedSort));
    },
    sortedAndSearchedFilms() {
      return this.sortedFilms.filter(film => film.name.toLowerCase().includes(this.searchFilmQuery.toLowerCase()))
    },
    pages() {
      return Math.ceil(this.films.length / this.filmsPerPage);
    },
    paginatedFilms() {
      let from = (this.pageNumber - 1) * this.filmsPerPage;
      let to = from + this.filmsPerPage;
      return this.sortedFilms.slice(from, to)
    }
  },
  methods: {
    getSortOptions() {
      return this.sortOptions = Array.from(new Set(this.films.map(item => item.genre)))
    },
    turnThePage(page) {
      this.pageNumber = page;
      // TODO - СПРОСИТЬ У ДИМАНА НАСЧЕТ ДЕФОЛТНОГО УРЛ /1 И ЧТОБ СТРАНИЦА МЕНЯЛАСЬ ПРИ КЛИКЕ
      // this.$route.params.page = this.pageNumber
    }
  },
  mounted() {
    this.paginatedFilmsArray = [...this.films];
  },
  created() {
    this.getSortOptions();
    // this.$route.params.page = this.pageNumber
  }
};
</script>
