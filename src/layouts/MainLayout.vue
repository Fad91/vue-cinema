<template>
  <NavBar></NavBar>
  <div class="wrapper">
    <slot/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: 'main-layout',
  components: { NavBar },
}
</script>
