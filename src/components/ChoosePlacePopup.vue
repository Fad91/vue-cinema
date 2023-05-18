<template>
    <div class="popup-choose-place__content">
      <h2>Выберите дату</h2>
      <div class="popup-choose-place__calendar-wrapper" v-if="!isPlacesShow">
        <div
          v-for="date in film.dates"
          :key="date"
          :data-date="date.date"
          @click="selectedDate = date"
        >
          {{ date }}
        </div>
      </div>
      <p>Выбранная дата: {{ selectedDate }}</p>
      <button @click="createLink" v-if="selectedDate" class="w-full text-gray bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">Отправь ссылку своему бойфренду, маленький хулиган</button>
      <button type="button" class="text-gray bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2" v-if="selectedDate" @click="showPlacesBlock">
        Показать места
      </button>
      <div class="places" v-if="isPlacesShow">
        <div v-for="(place, index) in choosedPlaces" :key="index">
          <p class="text-center mb-2">{{ place }}</p>
        </div>
        <button @click="buyTicket" v-if="placesDesc" class="w-full mb-2 text-gray bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">Купить</button>
        <div
          v-for="(row, index1) in cinemaHall"
          :key="row"
          class="places-row"
          :data-row="index1"
        >
          <div
            v-for="(item, index2) in row"
            :key="item"
            class="places__item places-place"
            :data-choosed="item"
            :data-place="index2"
            @click="choosePlace(index1, index2, $event)"
          ></div>
        </div>
      </div>
    </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {
  name: "ChoosePopupPlace",
  props: {
    film: {
      name: {
        required: true,
        type: String,
      },
    },
  },
  emits: ['closePopup'], 
  data() {
    return {
      selectedDate: null,
      isPlacesShow: false,
      placesDesc: "",
      choosedPlaces: [],
      isPlaceChoosed: false,
      newTickets: [],
      cinemaHall: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    };
  },
  newTicket: "",
  methods: {
    showPlacesBlock() {
      this.isPlacesShow = true;
      this.tickets.forEach((ticket) => {
        if (
          this.film.name === ticket.name &&
          this.selectedDate === ticket.date
        ) {
          this.cinemaHall[ticket.row][ticket.place] = true;
        }
      });
    },
    choosePlace(index1, index2, e) {
      let newTicket = {
        id: Date.now(),
        row: index1,
        place: index2,
        name: this.film.name,
        date: this.selectedDate,
      };
      e.target.dataset.choosed = true;
      this.isPlaceChoosed = true;
      this.placesDesc = `Ряд: ${(index1 += 1)}, Место: ${(index2 += 1)}`;
      this.choosedPlaces.push(this.placesDesc);
      this.$options.newTicket = newTicket;
      this.newTickets.push(newTicket);
    },
    buyTicket() {
      this.newTickets.forEach((newTicket) => {
        this.$store.commit("tickets/ADD_TICKET", newTicket);
      });
      this.closePopup();
      this.$toast.show(`Поздравляем, билеты забронированы, можно оплатить в корзине!`);

    },
    createLink() {
      this.$router.replace({
        path: this.$route.path,
        query: {
          popup: true,
          date: this.selectedDate,
          name: this.film.name
        },
      });
      const newLink = this.$route.fullPath
      navigator.clipboard.writeText(newLink); 
      this.$toast.show('Ссылка скопирована в буфер обмена')
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  computed: {
    ...mapGetters({
      tickets: "tickets/TICKETS",
    }),
  },
  mounted() {
    if (this.$route.query) {
      this.selectedDate = this.$route.query.date
    }
  }
};
</script>
