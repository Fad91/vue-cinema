<template>
  <div class="nav bg-gray-800 relative">
    <div class="nav__wrapper flex items-center justify-between mx-auto">
      <div class="nav__links">
      <router-link :to="{ name: 'home' }" class="text-white hover:bg-gray-700 rounded-md px-3 py-2">Главная</router-link>
      <router-link :to="{ name: 'basket' }" class="text-white hover:bg-gray-700 rounded-md px-3 py-2">Корзина</router-link>
    </div>
    <DropDown :tickets="tickets" class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DropDown from "@/components/DropDownComponent.vue";
export default {
  name: "NavBar-Component",
  components: {
    DropDown,
  },
  computed: {
    ...mapGetters({
      tickets: "tickets/TICKETS",
    }),
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  background: white;
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
