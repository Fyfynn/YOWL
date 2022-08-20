<template>
        <div id="app"></div>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  background-image: url('assets/dégradé-orange.png');
  background-size: cover;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
