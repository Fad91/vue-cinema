<template>
  <div class="flex flex-col" v-for="(ticket, index) in tickets" :key="ticket">
    <div class="ticket flex flex-row w-full space-x-4 mb-2">
      <div class="text-xl">{{ index + 1 }}.</div>
      <div class="text-xl">{{ ticket.date }}</div>
    </div>
      <div class="ticket__desc flex w-full justify-between px-2" v-for="ticket in ticket.tickets" :key="ticket.id">
        <div class="text-xl mr-5 text-gray-800">{{ ticket.name }}</div>
        <div class="text-xl mr-5 text-gray-800">Ряд :{{ ticket.row }}</div>
        <div class="text-xl mr-5 text-gray-800">Место :{{ ticket.place }}</div>
        <button type="button" @click="refundTicket(ticket)" class="text-white bg-gray-700 hover:bg-gray-500 rounded-md px-3 py-2">Вернуть билет</button>
      </div>

  </div>
</template>

<script>
import { toRaw } from "vue";
export default {
  name: "TicketComponent",
  props: {
    tickets: {
      type: Array,
      required: true,
    },
  },
  // emits: ['refundTicket'],
  methods: {
    refundTicket(ticket) {
      this.$store.commit('tickets/REMOVE_TICKET', ticket)
    }
  }
};
</script>
<style lang=""></style>
