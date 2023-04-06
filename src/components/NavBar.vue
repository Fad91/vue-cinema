<template>
  <div class="nav">
    <div class="nav__wrapper">
      <router-link :to="{ name: 'home' }">Главная</router-link>
      <router-link :to="{ name: 'basket' }">Корзина</router-link>
    </div>
    <DropDown :tickets="tickets"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import DropDown from '@/components/DropDownComponent.vue';
export default {
  name: "NavBar-Component",
  components: {
    DropDown
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