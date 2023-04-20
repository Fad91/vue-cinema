<template>
  <ChoosePlacePopup
    :isPopupShown="isPopupShown"
    :film="film"
    @closePopup="closePopup"
  ></ChoosePlacePopup>
  <div class="bg-red-50 p-5 mt-5">
    <h1 class="mb-5 font-bold underline text-2xl">{{ film.name }}</h1>
    <img :src="`../${film.img}`" class="mx-auto my-2"/>
    <p class="mb-3">{{ film.desc }}</p>
    <button type="button" class="text-gray bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2" @click="isPopupShown = true">Купить билет</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChoosePlacePopup from "@/components/ChoosePlacePopup.vue";
export default {
  components: {
    ChoosePlacePopup,
  },
  data() {
    return {
      id: this.$route.params.id,
      film: {},
      isPopupShown: false,
    };
  },
  methods: {
    getFilm() {
      return (this.film = this.films.find((film) => film.id === this.id));
    },
    // buyTicket(ticket) {
    //   this.isPopupShown = false
    //   const newTicket = {
    //     name: this.film.name,
    //     date: ticket.selectedDate,
    //     row: ticket.row,
    //     place: ticket.place
    //   }
    //   this.$store.commit('tickets/ADD_TICKET', newTicket)
    // },
    closePopup() {
      this.isPopupShown = false;
    },
  },
  computed: {
    ...mapGetters({
      films: "films/FILMS",
    }),
  },
  created() {
    this.getFilm();
  },
  // props: {
  //   film: {
  //     type: Object,
  //     required: true
  //   }
  // }
};
</script>
<style lang=""></style>
