<template>
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
</template>

<script>
export default {
  name: 'TicketComponent',
  props: {
    tickets: {
      type: Array,
      required: true
    }
  }  
}
</script>
<style lang="">
  
</style>