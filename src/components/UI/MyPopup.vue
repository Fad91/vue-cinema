<template>
  <div class="popup" v-if="isPopupShown">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "my-popup",
  props: {
    isPopupShown: {
      required: true,
      type: Boolean,
    },
  },
};
</script>
<style lang=""></style>
