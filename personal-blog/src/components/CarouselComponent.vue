<template>
  <div class="carousel">
    <TitleComponent>精选文章</TitleComponent>
    <ul class="list">
      <li v-for="featured in featureds" :key="featured.id">
        <router-link to="/article">
          <div class="introduce">
            <h4>{{ featured.title }}</h4>
            <p>{{ featured.content }}</p>
          </div>
          <img :src="featured.cover" alt="img not found">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import TitleComponent from '../components/TitleComponent';
import featureds from '@/utills/markdown';

export default {
    name: 'CarouselComponent',
    components: {
      TitleComponent,
    },
    data() {
      return {
        featureds: []
      }
    },
    created() {
      this.featureds = featureds;
    }
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
  ul {
      width: 100%;
      height: 90%;
      padding: 0;
      display: flex;
      align-items: center;
      transform-style: preserve-3d;
  }
  li {
    --n: 4;
    --size: 20%;
    width: var(--size);
    height: calc(var(--size) * 3.5);
    --space: calc(100% - var(--n) * var(--size));
    --h: calc(var(--space) / var(--n) / 2);
    margin: 50px var(--h);
    opacity: var(--opacity);
    border-radius: 50px;
    transition: all .5s;
    box-shadow: 8px 8px 11px rgba(0, 0, 0, 0.8);
    position: relative;
  }
  ul li:hover {
    opacity: 1;
  }
  .introduce {
    width: 250px;
    position: absolute;
    bottom: 20px;
    left: 0;
  }
  .introduce p,h4 {
    max-width:100%;
    color: var(--textColor);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    margin: 10px 5px;
  }
  ul:hover > :not(:hover) {
    /* margin:5px 10px; */
    filter: drop-shadow(0 0 10px #000);
    transform: perspective(800px) rotateY(35deg) scale(0.8);
  }
  .list li:hover ~ li {
    transform: perspective(800px) rotateY(-35deg) scale(0.8);
  }
  img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
  }
</style>