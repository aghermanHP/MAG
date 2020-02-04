<template>
  <div id="app">
     <HeaderMag id="header"></HeaderMag>
    <div id="nav">
       <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderMag from './components/header'

export default {
   components: {
    HeaderMag
  }
}
</script>

<style lang="scss">
#header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-top: 56px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
