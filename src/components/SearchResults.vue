<template>
  <div class="SearchResults">
    <h1>SearchResults</h1>
    <div v-if="data.length === 0">Nothing found.</div>
    <div v-for="item in data" :key="item.imdbID">{{item.Title}}</div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    data: Array,
    default: []
  }
};
</script>

<style scoped>
</style>
