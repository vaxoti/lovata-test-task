<template>
  <div class="PreviousSearches">
    <h1>Previous Searches</h1>
    <div>
      <div v-for="(value, key) in previosSearches" :key="key">
        <router-link class="PreviousSearches-link" :to="moviePath(value)">
          <b>{{value.searchText}}</b>
          at page
          <b>{{value.page}}</b>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviousSearches",
  data: function() {
    return {
      previosSearches: this.$store.state.previosSearches
    };
  },
  methods: {
    moviePath(value) {
      return `/movies?s=${value.searchText}&page=${value.page}`;
    }
  }
};
</script>

<style scoped>
.PreviousSearches h1 {
  color: #333;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
}
.PreviousSearches b {
  color: #5863c7;
}
.PreviousSearches-link {
  padding: 20px;
  border: 1px solid #eee;
  display: block;
  font-size: 30px;
  color: #333;
  text-decoration: none;
  transition: 0.3s;
  margin-bottom: -1px;
}
.PreviousSearches-link:hover {
  background: #eee;
}
</style>
