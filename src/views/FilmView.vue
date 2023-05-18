<template>
  <my-popup ref="popup">
    <ChoosePlacePopup :film="film" @closePopup="closePopup"></ChoosePlacePopup>
  </my-popup>
  <div class="bg-red-50 p-5 mt-5">
    <h1 class="mb-5 font-bold underline text-2xl">{{ film.name }}</h1>
    <img :src="`../${film.img}`" class="mx-auto my-2"/>
    <p class="mb-3">{{ film.desc }}</p>
    <button type="button" class="text-gray bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2" @click="showPopup">Купить билет</button>
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
    };
  },
  methods: {
    getFilm() {
      return (this.film = this.films.find((film) => film.id === this.id));
    },
    showPopup() {
      this.$refs.popup.showPopup()
    },
    closePopup() {
      this.$refs.popup.closePopup()
    }
  },
  computed: {
    ...mapGetters({
      films: "films/FILMS",
    }),
  },
  created() {
    this.getFilm();
  },
  mounted() {
    if (this.$route.query.popup) {
      this.$refs.popup.showPopup()
    }
  }
  // props: {
  //   film: {
  //     type: Object,
  //     required: true
  //   }
  // }
};
</script>
<style lang=""></style>
