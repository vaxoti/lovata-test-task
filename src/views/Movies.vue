<template>
  <div class="Movies">
    <h1>Search</h1>
    <input
      @keypress="e => getData(e)"
      e
      v-model="searchText"
      class="Movies-search"
      type="text"
      placeholder="Input movie name here"
    />
    <div class="Movies-search-results-container">
      <div v-if="isLoading" class="Movies-search-results-spinner">
        <img src="@/assets/spinner.svg" alt />
      </div>
      <SearchResults :data="$store.state.currentSearch.movies" />
      <Pagination
        v-if="$store.state.currentSearch.movies.length !== 0"
        :totalPages="$store.state.currentSearch.totalPages"
        :currentPage="$store.state.currentSearch.currentPage"
        :changePage="changePage"
      />
    </div>
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Movies",
  data: function() {
    return {
      searchText: "",
      isLoading: false
    };
  },
  components: {
    SearchResults,
    Pagination
  },
  mounted: function() {
    const { query } = this.$route;
    if (query.s && query.page) {
      const data = {
        searchText: query.s,
        page: Number(query.page)
      };
      this.searchText = query.s;
      this.dispatchCallMovies(data);
    }
  },
  methods: {
    dispatchCallMovies: function(data) {
      const { searchText, page } = data;
      const searchName = `s_${searchText.replace(" ", "_")}_p_${page}`;
      const previosSearch = this.$store.state.previosSearches[searchName];
      this.isLoading = true;
      this.changeQuery(data);
      if (previosSearch) {
        const { Search, totalResults, searchText, page } = previosSearch;
        const setCurrentData = {
          Search,
          totalResults,
          searchText,
          page
        };
        this.$store.commit("setCurrentSearch", setCurrentData);
        this.isLoading = false;
      } else {
        this.$store
          .dispatch("callMovies", { ...data, searchName })
          .then(() => (this.isLoading = false));
      }
    },
    changeQuery: function(data) {
      const path = `/movies?s=${data.searchText.replace(" ", "%20")}&page=${
        data.page
      }`;
      if (path !== this.$route.fullPath) {
        this.$router.replace(`${path}`);
      }
    },
    getData: function(e) {
      if (e.keyCode === 13) {
        const { searchText } = this;
        const data = {
          searchText,
          page: 1
        };
        this.dispatchCallMovies(data);
      }
    },
    changePage: function(page) {
      const data = {
        searchText: this.$store.state.currentSearch.searchText,
        page
      };
      this.$store.commit("changeCurrentPage", page);
      this.dispatchCallMovies(data);
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
.Movies-search-results-container {
  position: relative;
}
.Movies-search-results-spinner {
  z-index: 500;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>