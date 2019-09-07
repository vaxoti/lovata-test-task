<template>
  <div id="app">
    <div class="Navbar">
      <router-link class="Navbar-link" to="/movies">Movies</router-link>
      <router-link class="Navbar-link" to="/previous-searches">Previous Searches</router-link>
    </div>
    <router-view class="Navbar-body" />
  </div>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 60px;
}
.Navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 5px rgba(50, 50, 50, 0.3);
  padding: 0 20px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.Navbar-link {
  padding: 20px;
  display: block;
  text-decoration: none;
  font-size: 18px;
  color: #666;
  text-transform: uppercase;
  transition: 0.3s;
}
.Navbar-link:hover,
.Navbar-link.router-link-active {
  background: #b7beff;
  color: #333;
}
.Navbar-body {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
