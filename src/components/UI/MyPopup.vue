<template>
  <teleport to="body">
    <div class="popup" v-if="isPopupShown">
      <div class="popup__wrapper">
        <button class="popup__close-btn" @click="closePopup">
        X
        </button>
      <slot></slot>
      </div>
    </div>
  </teleport>
</template>
<script>
export default {
  name: "my-popup",
  data() {
    return {
      isPopupShown: false
    }
  }, 
  methods: {
    showPopup() {
      this.isPopupShown = true
    },
    closePopup() {
      this.isPopupShown = false
    }
  }
};
</script>
<style></style>
