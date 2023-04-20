<template>
  <div class="sort-block my-5 text-left">
    <label class="label font-sans">
      <span class="mr-5">Сортировка по жанру</span>
      <select class="static top-0 left-0 bg-gray-200 p-2 rounded" :value="modelValue" @change="changeOption">
        <option disabled value="">Выберите из списка</option>
        <option :value="''">Все</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>
