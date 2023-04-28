<template>
  <div class="dropdown">
    <button @click="showDropdown" class="dropdown__btn">Дропдаун</button>
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "my-dropdown",
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
