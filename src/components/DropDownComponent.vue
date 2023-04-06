<template lang="">
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
</template>
<script>
export default {
  name: 'DropDown',
  props: {
    tickets: {
      type: Array,
      required: true
    }
  },
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
}
</script>
<style lang="">
  
</style>