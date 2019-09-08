<template>
  <div class="Pagination">
    <div @click="changePage(currentPage-1)" v-if="currentPage > 1">Prev</div>
    <div
      v-for="page in pages"
      :key="page"
      @click="changePage(page)"
      :class="{active: page === currentPage}"
    >{{page}}</div>
    <div @click="changePage(currentPage+1)" v-if="currentPage < pageCount">Next</div>
  </div>
</template>

<script>
import { MOVIES_PER_PAGE } from "@/utils/constants";

export default {
  name: "Pagination",
  props: {
    totalPages: Number,
    currentPage: Number,
    changePage: Function
  },
  data: () => ({
    perPage: MOVIES_PER_PAGE
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.totalPages / this.perPage);
    },
    pages() {
      let arr = [];
      for (let i = this.currentPage - 2; i < this.currentPage + 3; i++) {
        if (i > 0 && i <= this.pageCount) {
          arr.push(i);
        }
      }
      return arr;
    }
  }
};
</script>

<style scoped>
.Pagination {
  margin: 20px 10px;
  color: #333;
  display: flex;
  justify-content: center;
}
.Pagination > div {
  height: 40px;
  min-width: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: 0.3s;
  user-select: none;
}
.Pagination > div:hover {
  background: #5863c7;
  color: #fff;
}
.Pagination > div.active {
  background: #5863c7;
  color: #fff;
}
</style>
