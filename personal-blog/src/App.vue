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

  /* 默认亮色主题 */
  :root {
    /* header */
    /* --headerColor: #70f3ff; */
    --buddle: #e9e7ef;
    --gradientColor: 0 40px 60px rgba(252, 248, 248, 0.18), 0 40px 80px rgba(160, 154, 154, 0.24);
    --searchP: #8c4356;
    --searchF: #66afe9;
    --searchG: rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    --active: #f0f9f0;
    --btn: #1677ff;
    --btnH: #4096ff;
    --toggle: #0bf33a;
    /* content */
    --bgImg: url(./assets/imgs/ocean.jpg);
    --A: #e0f0e9;
    --B: #a1afc9;
    --opacity: 0.8;
    --underline: #00bc12;
    /* footer */
    --footerColor: linear-gradient(-45deg, #828d9b, rgb(55, 56, 58));
    --footerGradient: linear-gradient(-225deg, #1206ee, #0cf637 29%, #08a4f3 67%, #d307fc);
    --progress: #eceff2;
    /* text color */
    --textColor: rgb(15, 15, 15);
  }

  /* 暗色主题 */
  html[data-theme='dark'] {
    /* header */
    --buddle: #656468;
    /* --headerColor: #2c3e50; */
    --gradientColor: 0 40px 60px rgba(0, 0, 0, 0.18), 0 40px 80px rgba(0, 0, 0, 0.24);
    --searchP: #8c4356;
    --searchF: #66afe9;
    --searchG: rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    --active: #111211;
    --btn: #003472;
    --btnH: #2F3949;
    --toggle: #003371;
    /* content */
    --bgImg: url(./assets/imgs/sky.jpg);
    --A: 	#2e4e7e;
    --B: #065279;
    --opacity: 0.6;
    --underline: ;
    /* footer */
    --footerColor: linear-gradient(-45deg, #656468, rgb(9, 6, 21));
    --footerGradient: linear-gradient(-225deg, #231557, #44107a 29%, #ff1361 67%, #fff800);
    --progress: #44cef6;
    /* text color */
    --textColor: whitesmoke;
  }


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
    background-image: var(--bgImg);
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
    z-index: 9999;
  }

  footer {
    opacity: 0.6;
    background-image: var(--footerColor);
  }
</style>
