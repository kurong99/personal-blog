<template>
  <div id="app">
    <header>
      <Header/>
    </header>
    <section>
      <ViewContainer/>
    </section>
    <MeteorComponent/>
  </div>
</template>

<script>
import Header from './components/HeaderComponent';
import ViewContainer from './components/ViewComponent';
import MeteorComponent from './components/MeteorComponent';

export default {
  name: 'App',
  components: {
    Header,
    ViewContainer,
    MeteorComponent
  },
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
    height: 100vh;
    background-image: url(./assets/imgs/sky.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 1;
    position: relative;
  }
  
</style>
