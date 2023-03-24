<template>
  <div class="popup-choose-place" v-if="isPopupShown">
    <div class="popup-choose-place__content">
      <button class="popup-choose-place__close-btn" @click="closePopup">X</button>
      <h2>Выберите дату</h2>
      <div class="popup-choose-place__calendar-wrapper" v-if="isCalendarShown">
        <div v-for="date in film.dates" :key="date" :data-date="date.date" @click="selectedDate = date.date">
          {{ date.date }}
        </div>
      </div> 
      <p>Выбранная дата: {{ selectedDate }}</p>
      <button type="button" v-if="selectedDate" @click="showPlacesBlock">Показать места</button>
    <div class="places" v-if="isPlacesShow">
      <p v-if="isPlaceChoosed">{{ placesDesc }}</p>
      <button @click="buyTicket" v-if="isPlaceChoosed">Купить</button>
      <div v-for="row in 5" :key="row" class="places-row" :data-row="row">
        <div v-for="item in 5" :key="item" class="places__item places-place" :class="{ choosed: choosedPlace == item && choosedRow == row }" :data-place="item" @click="showPlaceDesc"></div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
// import VueInlineCalendar from 'vue-inline-calendar';
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
  // components: {
  //   VueInlineCalendar
  // },  
  data() {
    return {
      selectedDate: null,
      isPlacesShow: false,
      isCalendarShown: true,
      placesDesc: null,
      choosedRow: null,
      choosedPlace: null,
      isPlaceChoosed: false
    }
  },
  methods: {
    showPlacesBlock() {
      this.isPlacesShow = true;
      this.isCalendarShown = false;
    },
    showPlaceDesc(e) {
      this.choosedPlace = e.target.dataset.place
      this.choosedRow = e.target.parentElement.dataset.row
      this.placesDesc = `Ряд: ${this.choosedRow}, Место: ${this.choosedPlace}`
      this.isPlaceChoosed = true
    },
    buyTicket() {
      this.$emit('buyTicket', {
        selectedDate : this.selectedDate,
        row: this.choosedRow,
        place: this.choosedPlace
      })
      this.choosedPlace = null
      this.choosedRow = null;
      this.isCalendarShown = true;
      this.isPlaceChoosed = false;
      this.selectedDate = null;
      this.isPlacesShow = false;
    },
    closePopup() {
      this.$emit('closePopup')
    }
  },
  computed: {
    ...mapGetters({
      tickets: 'tickets/TICKETS'
    }),
  }
}
</script>

<style lang="scss">
.popup-choose-place {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

    &__calendar-wrapper {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      justify-content: center;
      row-gap: 20px;
    }

    &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    max-width: 500px;
    width: 100%;
  }
}

.date-item__year {
  text-align: center !important;
}

.places {
  margin: 0 auto;

  &-row {
    display: flex;
  }

  &__item {
    width: 92px;
    height: 92px;
    border: 1px solid black;
  }
}

.choosed {
  background: teal;
  pointer-events: none;
}
</style>