<template>
  <div class="about my-5">
    <h1 class="mb-5 font-bold underline text-2xl">Корзина</h1>
    <p class="mb-5 font-bold text-xl">Выбранные билеты</p>
    <TicketComponent :tickets="tickets" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TicketComponent from "@/components/TicketComponent.vue";

export default {
  components: { TicketComponent },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      tickets: "tickets/TICKETS",
    }),
  },
};
</script>
