<template>
  <div id="app">
    <head-nav>
    </head-nav>
    <router-view/>
  </div>
</template>
<script>
  import headNav from './components/header_nav.vue'
  export default {
    name: 'App',
    components:{
        headNav
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
