<template>
  <div class="SearchResults">
    <h1>SearchResults</h1>
    <div v-if="data.length === 0">Nothing found.</div>

    <div class="SearchResults-container">
      <div v-for="item in data" :key="item.imdbID">
        <router-link class="SearchResults-item" :to="`/movies/${item.imdbID}`">
          <div class="SearchResults-item-image">
            <img :src="item.Poster" alt />
          </div>
          <div class="SearchResults-item-description" :class="{ active: item.Poster=== 'N/A'}">
            <h2>{{item.Title}} {{item.Type}}</h2>
            <h3>{{item.Year}}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    data: Array
  }
};
</script>

<style scoped>
.SearchResults {
  color: #333;
  margin-top: 50px;
}
.SearchResults > h1 {
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
}
.SearchResults-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.SearchResults-item {
  color: #333;
  position: relative;
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  margin: -1px -1px 0 0;
  width: 240px;
  height: 400px;
  transition: 0.3s;
}
.SearchResults-item-image {
  width: 100%;
  box-sizing: border-box;
}
.SearchResults-item-image img {
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
}
.SearchResults-item-description {
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  padding: 40px;
  box-sizing: border-box;
  opacity: 0;
  transition: 0.3s;
}
.SearchResults-item-description.active {
  border: 1px solid #eee;
  opacity: 1;
}
.SearchResults-item:hover {
  box-shadow: 0 0 10px rgba(200, 200, 200, 1);
}
.SearchResults-item:hover .SearchResults-item-description {
  opacity: 1;
}
.SearchResults-item-description h2,
.SearchResults-item-description h3 {
  text-align: center;
  margin: 0;
  font-weight: normal;
}
</style>
