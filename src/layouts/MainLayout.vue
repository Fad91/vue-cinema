<template>
  <NavBar></NavBar>
  <div class="wrapper">
    <slot />
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/Footer.vue"
export default {
  name: "main-layout",
  components: { NavBar, FooterComponent },
};
</script>
