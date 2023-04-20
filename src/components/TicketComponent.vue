<template>
  <div class="flex flex-col" v-for="(ticket, index) in tickets" :key="ticket">
    <div class="ticket flex flex-row w-full space-x-4">
      <div class="text-xl">{{ index + 1 }}.</div>
      <div class="ticket__desc flex flex-row w-full">
        <div class="text-xl mr-5 text-gray-800">{{ ticket.name }}</div>
        <div class="text-xl mr-5 text-gray-800">{{ ticket.date }}</div>
        <div class="text-xl mr-5 text-gray-800">Ряд :{{ ticket.row }}</div>
        <div class="text-xl mr-5 text-gray-800">Место :{{ ticket.place }}</div>
        <button type="button" @click="refundTicket(ticket)" class="text-white bg-gray-700 hover:bg-gray-500 rounded-md px-3 py-2">Вернуть билет</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketComponent",
  props: {
    tickets: {
      type: Array,
      required: true,
    },
  },
  methods: {
    refundTicket(ticket) {
      if (confirm('Братишка, ну че началось?) Хочешь вернуть?')) {
        if (confirm('Брат, я те охуенно сделаю, все равно хочешь вернуть?)')) {
          this.$store.commit('tickets/REMOVE_TICKET', ticket);
        }
      }
    }
  }
};
</script>
<style lang=""></style>
