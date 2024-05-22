<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/HeaderComponent';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    box-sizing: content-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
