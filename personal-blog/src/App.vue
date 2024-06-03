<template>
  <div id="app">
    <header>
      <Header/>
    </header>
    <section>
      <ViewContainer/>
    </section>
    <MeteorComponent/>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>

<script>
import Header from './components/HeaderComponent';
import ViewContainer from './components/ViewComponent';
import MeteorComponent from './components/MeteorComponent';
import FooterComponent from './components/FooterComponent';

export default {
  name: 'App',
  components: {
    Header,
    ViewContainer,
    MeteorComponent,
    FooterComponent
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
  ::-webkit-scrollbar {
    display: none;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* height: 100vh; */
    background-image: url(./assets/imgs/sky.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    z-index: 1;
    position: relative;
  }
  header{
    position: sticky;
    top: 0;
  }

  footer {
    opacity: 0.6;
    background-image: linear-gradient(45deg, #3d3b4f, rgb(9, 6, 21));
  }
</style>
