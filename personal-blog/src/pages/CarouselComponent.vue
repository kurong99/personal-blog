<template>
  <div class="carousel">
    <div class="title">
      <span>精选文章</span>
    </div>
    <ul class="picList">
      <li>
        <a href="#">
          <img src="../assets/imgs/lake.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/imgs/sunset.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/imgs/skagsanden.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/imgs/mountains.jpg" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'CarouselComponent'
}
</script>

<style scoped>
  * {
    list-style: none;
    text-decoration: none;
  }
  .carousel {
      width: 100%;
      height: 360px;
      margin: 20px auto;
      overflow: hidden;
  }
  .title {
    float: left;
  }
  .title span {
    color: aliceblue;
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration: underline;
    cursor: pointer;
  }
  ul {
      width: 100%;
      height: 100%;
      padding: 0;
      display: flex;
      transform-style: preserve-3d;
  }
  li {
    height: 70%;
    --n: 4;
    --size: 23%;
    --space: calc(100% - var(--n) * var(--size));
    --h: calc(var(--space) / var(--n) / 2);
    margin: 50px var(--h);
    opacity: 0.6;
    border-radius: 50px;
    transition: all .5s;
    /* -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.5)); */
    box-shadow: 8px 8px 11px rgba(0, 0, 0, 0.8);
    /* transform: perspective(1000px) rotateY(10deg); */
  }
  .picList li:hover {
    opacity: 1;
  }
  ul:hover > :not(:hover) {
    margin:50px -10px;
    filter: 
      drop-shadow(0 0 10px #000);
      /* drop-shadow(0 0 10px #000); */
    transform: perspective(800px) rotateY(45deg) scale(0.8);
  }
  .picList li:hover ~ li {
    transform: perspective(800px) rotateY(-45deg) scale(0.8);
  }
  img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
  }
</style>