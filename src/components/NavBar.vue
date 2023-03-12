<template>
  <div class="nav">
    <router-link :to="{ name: 'home' }">Главная</router-link>
    <router-link :to="{ name: 'basket' }">Корзина</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar-Component",
};
</script>
