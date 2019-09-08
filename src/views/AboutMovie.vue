<template>
  <div class="AboutMovie">
    <div v-if="Object.keys(movie).length === 0" class="AboutMovie-spinner">
      <img src="@/assets/spinner.svg" alt />
    </div>
    <h1>{{movie.Title}} {{movie.Type}}</h1>
    <h2>{{movie.Year}}, {{movie.Production}}, {{movie.Country}}</h2>
    <div class="AboutMovie-conteiner">
      <div>
        <img :src="movie.Poster" alt />
      </div>
      <div>
        <div class="AboutMovie-conteiner-description">
          <div>
            <p>Runtime: {{movie.Runtime}}</p>
            <p>Rated: {{movie.Rated}}</p>
            <p>Language: {{movie.Language}}</p>
            <p>Box Office: {{movie.BoxOffice}}</p>
            <p>
              <a :href="movie.Website" target="_blank">Website</a>
            </p>
          </div>
          <div>
            <p>Director: {{movie.Director}}</p>
            <p>Writer: {{movie.Writer}}</p>
            <p>Actors: {{movie.Actors}}</p>
            <p>Awards: {{movie.Awards}}</p>
          </div>
        </div>
        <h3>Ratings</h3>
        <div class="AboutMovie-conteiner-ratings">
          <div>
            <p v-for="item in movie.Ratings" :key="item.Value">{{item.Source}} - {{item.Value}}</p>
          </div>
          <div>
            <p>imdbRating: {{movie.imdbRating}}</p>
            <p>imdbVotes: {{movie.imdbVotes}}</p>
            <p>Metascore: {{movie.Metascore}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="AboutMovie-plot">{{movie.Plot}}</div>
  </div>
</template>

<script>
export default {
  name: "AboutMovie",
  data: () => ({
    movie: {}
  }),
  mounted: function() {
    const id = this.$route.params.movieID;
    const movie = this.$store.state.allMovies[id];
    !movie
      ? this.$store
          .dispatch("callMovie", id)
          .then(() => (this.movie = this.$store.state.allMovies[id]))
      : (this.movie = movie);
  }
};
</script>

<style scoped>
.AboutMovie {
  position: relative;
}
.AboutMovie-spinner {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.AboutMovie h1 {
  text-align: center;
  font-weight: normal;
  font-size: 40px;
}
.AboutMovie h2 {
  text-align: center;
  font-weight: normal;
  font-size: 30px;
}
.AboutMovie h3 {
  margin: 0;
  text-align: center;
  font-weight: normal;
  font-size: 24px;
}
.AboutMovie p {
  margin: 0;
  margin-bottom: 10px;
}
.AboutMovie a {
  color: #fff;
  font-weight: bold;
}
.AboutMovie-conteiner {
  background: #444;
  color: #fff;
  display: flex;
}
.AboutMovie-conteiner-description {
  display: flex;
}
.AboutMovie-conteiner-description > div {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
}
.AboutMovie-conteiner-ratings {
  justify-content: center;
  display: flex;
}
.AboutMovie-conteiner-ratings > div {
  padding: 20px;
  box-sizing: border-box;
}
.AboutMovie-plot {
  background-color: #444;
  color: #fff;
  padding: 20px;
  font-size: 20px;
}
</style>
