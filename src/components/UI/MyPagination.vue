<template>
    <ul class="pagination">
      <li class="pagination__item" v-for="(page,index) in pages" :key="index" @click="turnThePage(page)">{{ page }}</li>
    </ul>
</template>
<script>
export default {
  name: 'my-pagination',
  data() {
    return {
      pageNumber: 1
    }
  },
  props: {
    filmsList: {
      type: Array,
      required: true
    },
    filmsPerPage: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.filmsList.length / this.filmsPerPage);
    },
  },
  methods: {
    turnThePage(page) {
      this.pageNumber = page;
      // TODO - СПРОСИТЬ У ДИМАНА НАСЧЕТ ДЕФОЛТНОГО УРЛ /1 И ЧТОБ СТРАНИЦА МЕНЯЛАСЬ ПРИ КЛИКЕ
      // this.$route.params.page = this.pageNumber
    }    
  }
}
</script>