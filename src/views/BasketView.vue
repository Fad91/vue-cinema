<template>
  <div class="about">
    <h1>Корзина</h1>
    <p>Выбранные билеты</p>
    <TicketComponent :tickets="tickets" />
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import TicketComponent from '@/components/TicketComponent.vue';

export default {
  components: { TicketComponent },
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