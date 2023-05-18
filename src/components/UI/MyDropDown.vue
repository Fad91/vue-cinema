<template>
    <button @click="showDropdown" class="dropdown__btn text-white hover:bg-gray-700 rounded-md px-3 py-2">Дропдаун</button>
    <Transition>
      <div class="dropdown absolute rounded-md px-2 py-2 bg-gray-100" v-if="isDropdownShown">  
        <slot></slot>
      </div>
    </Transition>
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

<style scoped>

.dropdown {
  top: 100%;
  right: 0;
  width: 50%;
  z-index: 50;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
