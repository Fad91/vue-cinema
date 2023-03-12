<template>
  <NavBar></NavBar>
  <div>
    <h1>{{ film.name }}</h1>
    <p>{{ film.desc }}</p>
    <button type="button">Купить билет</button>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import NavBar from "@/components/NavBar.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      film: {}
    }
  },
  components: { NavBar },
  methods: {
    getFilm() {
      return this.film = this.films.find(film => film.id === this.id)
    }
  },
  computed: {
    ...mapGetters({
      films: 'films/FILMS'
    }),
  },
  created() {
    this.getFilm()
  },
  // props: {
  //   film: {
  //     type: Object,
  //     required: true
  //   }
  // }
}
</script>
<style lang="">
  
</style>