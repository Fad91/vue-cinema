<template>
  <div class="sort-block">
    <label>
      <span>Сортировка по жанру</span>
      <select :value="modelValue" @change="changeOption">
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
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

.sort-block {
  margin: 0 0 20px;
}

</style>