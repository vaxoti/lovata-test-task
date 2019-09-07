<template>
  <div class="Movies">
    <h1>Movies</h1>
    <input
      @keypress="e => getDataFromAPI(e)"
      v-model="searchText"
      class="Movies-search"
      type="text"
      placeholder="Input movie name here"
    />
    <SearchResults />
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults.vue";

export default {
  name: "Movies",
  data: () => ({
    searchText: ""
  }),
  components: {
    SearchResults
  },
  methods: {
    getDataFromAPI: function(e) {
      if (e.keyCode === 13) {
        console.log(this.searchText);
      }
    }
  }
};
</script>

<style>
.Movies {
  padding: 20px;
}
.Movies > h1 {
  color: #333;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
}
.Movies-search {
  width: 100%;
  font-size: 20px;
  color: #333;
  outline: none;
  padding: 20px 40px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(150, 150, 150, 0.2);
  transition: 0.3s;
}
.Movies-search:focus {
  border-color: #ccc;
  box-shadow: 0 0 15px rgba(150, 150, 150, 0.3);
}
</style>