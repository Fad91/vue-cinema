<template lang="">
  <my-dropdown>
    <div class="dropdown__tickets" v-if="isDropdownShown">
      <div v-if="tickets.length !== 0">
        <TicketComponent :tickets="tickets" />
      </div>
      <router-link :to="{ name: 'basket' }">Оплатить</router-link>
    </div>
  </my-dropdown>
</template>
<script>
import TicketComponent from "./TicketComponent.vue";
export default {
  name: "DropDown",
  components: { TicketComponent },
  props: {
    tickets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isDropdownShown: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownShown = !this.isDropdownShown;
    },
  },
};
</script>
<style lang=""></style>
