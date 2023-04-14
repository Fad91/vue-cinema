<template>
  <my-popup :isPopupShown="isPopupShown">
    <div class="popup-choose-place__content">
      <button class="popup-choose-place__close-btn" @click="closePopup">X</button>
      <h2>Выберите дату</h2>
      <div class="popup-choose-place__calendar-wrapper" v-if="!isPlacesShow">
        <div v-for="date in film.dates" :key="date" :data-date="date.date" @click="selectedDate = date">
          {{ date }}
        </div>
      </div> 
      <p>Выбранная дата: {{ selectedDate }}</p>
      <button type="button" v-if="selectedDate" @click="showPlacesBlock">Показать места</button>
      <div class="places" v-if="isPlacesShow">
        <!-- TODO: Сделать логику, чтоб несколько билетов формировалось, и потом тут отрисовывать -->
        <div v-for="place, index in choosedPlaces" :key="index">
          <p>{{ placesDesc }}</p>
        </div>
        <button @click="buyTicket" v-if="placesDesc">Купить</button>
        <!-- <div v-for="row in 5" :key="row" class="places-row" :data-row="row">
          <div v-for="item in 5" :key="item" class="places__item places-place" :data-choosed="false" :data-place="item" @click="choosePlace"></div>
        </div> -->
        <div v-for="row, index1 in cinemaHall" :key="row" class="places-row" :data-row="index1">
          <div v-for="item, index2 in row" :key="item" class="places__item places-place" :data-choosed="item" :data-place="index2" @click="choosePlace(index1, index2, $event)"></div>
        </div>
      </div>
    </div>
  </my-popup>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ChoosePopupPlace',
  props: {
    isPopupShown: {
      required: true,
      type: Boolean
    },
    film: {
      name: {
        required: true,
        type: String
      }
    }
  },
  data() {
    return {
      selectedDate: null,
      isPlacesShow: false,
      placesDesc: '',
      choosedPlaces: [],
      // choosedPlace: null,
      // choosedRow: null,
      isPlaceChoosed: false,
      newTickets: [],
      cinemaHall: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ]
    }
  },
  newTicket: '',
  methods: {
    showPlacesBlock() {
      this.isPlacesShow = true;
      this.tickets.forEach(ticket => {
      if ((this.film.name === ticket.name) && (this.selectedDate === ticket.date)) {
        this.cinemaHall[ticket.row][ticket.place] = true
      }
    })
    },
    choosePlace(index1, index2, e) {
      let newTicket = {
        row: index1,
        place: index2,
        name: this.film.name,
        date: this.selectedDate
      }
      e.target.dataset.choosed = true;
      this.isPlaceChoosed = true
      this.placesDesc = `Ряд: ${index1+=1}, Место: ${index2+=1}`
      this.choosedPlaces.push(this.placesDesc)
      this.$options.newTicket = newTicket
      this.newTickets.push(newTicket);
      // this.resetPopup();
    },
    buyTicket() {
      this.newTickets.forEach((newTicket) => {
        this.$store.commit('tickets/ADD_TICKET', newTicket)
      })
      this.resetPopup()
    },
    closePopup() {
      this.$emit('closePopup');
      this.resetPopup()

    },
    resetPopup() {
      this.selectedDate = null;
      this.choosedPlace = null
      this.choosedRow = null;
      this.isPlaceChoosed = false;
      this.selectedDate = null;
      this.isPlacesShow = false;
      this.choosedPlaces = [];
      this.cinemaHall = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ]
    }
  },
  computed: {
    ...mapGetters({
      tickets: 'tickets/TICKETS'
    }),
  },
  // created() {
  //   this.tickets.forEach(ticket => {
  //     if ((this.film.name === ticket.name) && (this.selectedDate)) {
  //       this.cinemaHall[ticket.row-1][ticket.place-1] = true
  //     }
  //   })
  // }
}
</script>
