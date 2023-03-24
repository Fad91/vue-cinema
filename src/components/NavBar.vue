<template>
  <div class="nav">
    <div class="nav__wrapper">
      <router-link :to="{ name: 'home' }">Главная</router-link>
      <router-link :to="{ name: 'basket' }">Корзина</router-link>
    </div>
    <div class="dropdown">
      <button @click="showDropdown" class="dropdown__btn">Дропдаун</button>
      <div class="dropdown__tickets" v-if="isDropdownShown">
      <div v-if="tickets.length !== 0">
        <div v-for="ticket, index in tickets" :key="ticket">
          <div class="ticket">
            <div>{{ index + 1 }}.</div>
            <div class="ticket__desc">
              <div>{{ ticket.name }}</div>
              <div>{{ ticket.date }}</div>
              <div>Ряд :{{ ticket.row }}</div>
              <div>Место :{{ ticket.place }}</div>
            </div>
          </div>
        </div>
        <button></button>
      </div>
      <router-link :to="{ name: 'basket' }">Оплатить</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "NavBar-Component",
  data() {
    return {
      isDropdownShown: false,
    }
  },
  methods: {
    showDropdown() {
      this.isDropdownShown = !this.isDropdownShown
    }
  },
  computed: {
    ...mapGetters({
      tickets: 'tickets/TICKETS'
    }),
  },
};
</script>

<style lang="scss" scoped>

.dropdown {
  width: 150px;
  display: flex;
  flex-direction: column;

  &__btn {
    display: block;
    width: 100%;
  }

  &__tickets {
    padding: 10px;
  }
}

.ticket {
  display: flex;
}

</style>