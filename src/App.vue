<template>
  <div id="app" class="bg-gradient-to-b from-blue-300 via-gray-100 to-blue-300 h-full">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import './assets/tailwind.css';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
