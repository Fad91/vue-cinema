<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>
<script>

function debounce(fn, ms) {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments)
    }
    clearTimeout(timeout)
    timeout = setTimeout(fnCall, ms)
  }
}

export default {
  name: "my-input",
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  methods: {
    updateInput: debounce(function(event) {
      this.$emit("update:modelValue", event.target.value)
    }, 1000),
  },
};

</script>
<style>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin: 15px 0;
}
</style>
