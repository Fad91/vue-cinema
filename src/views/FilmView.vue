<template>
  <ChoosePlacePopup :isPopupShown="isPopupShown" :film="film" @buyTicket="buyTicket" @closePopup="closePopup"></ChoosePlacePopup>
  <div>
    <h1>{{ film.name }}</h1>
    <p>{{ film.desc }}</p>
    <button type="button" @click="isPopupShown = true">Купить билет</button>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import ChoosePlacePopup from '@/components/ChoosePlacePopup.vue';
export default {
  components: {
    ChoosePlacePopup
  },
  data() {
    return {
      id: this.$route.params.id,
      film: {},
      isPopupShown: false
    }
  },
  methods: {
    getFilm() {
      return this.film = this.films.find(film => film.id === this.id)
    },
    buyTicket(ticket) {
      this.isPopupShown = false
      const newTicket = {
        name: this.film.name,
        date: ticket.selectedDate,
        row: ticket.row,
        place: ticket.place
      }
      this.$store.commit('tickets/ADD_TICKET', newTicket)
    },
    closePopup() {
      this.isPopupShown = false
    }
  },
  computed: {
    ...mapGetters({
      films: 'films/FILMS',
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