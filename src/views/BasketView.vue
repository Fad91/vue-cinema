<template>
  <div class="about">
    <h1>Корзина</h1>
    <p>Выбранные билеты</p>
    <div v-for="ticket in tickets" :key="ticket">
      <div>{{ ticket.name }}</div>
      <div>{{ ticket.date }}</div>
      <div>Ряд :{{ ticket.row }}</div>
      <div>Место :{{ ticket.place }}</div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  data() {
    return {

    }
  },
  methods: {
    
  },
  computed: {
    ...mapGetters({
      tickets: 'tickets/TICKETS'
    }),
  }
}
</script>