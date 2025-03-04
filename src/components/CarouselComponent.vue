<template>
  <div class="carousel">
    <TitleComponent>精选文章</TitleComponent>
    <div class="default" v-if="items.length == 0">
      <h3>正在加载中........如果长时间没有反应，请稍后刷新重试!!!</h3>
    </div>
    <ul class="list" v-else>
      <li v-for="item in items" :key="item.id">
        <router-link :to="`/article/${item.type}/${item.name}`">
          <div class="introduce">
            <h4>{{ item.name }}</h4>
            <p>{{ item.introduction }}</p>
          </div>
          <img :src="item.cover" alt="img not found" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import TitleComponent from "../components/TitleComponent";
import featureds from "@/utills/featured";

export default {
  name: "CarouselComponent",
  components: {
    TitleComponent,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = featureds;
  },
};
</script>

<style scoped>
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

.carousel {
  width: 100%;
  height: auto;
  min-height: 360px;
  margin: 20px auto;
  overflow: hidden;
  position: relative;
}

ul {
  width: 100%;
  height: 90%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  transform-style: preserve-3d;
  overflow: scroll;
}

li {
  --size: clamp(200px, 20%, 300px);
  width: var(--size);
  height: calc(var(--size));
  opacity: var(--opacity);
  border-radius: 20px;
  transition: all 0.5s;
  box-shadow: 8px 8px 11px rgba(0, 0, 0, 0.8);
  position: relative;
}

li:hover {
  opacity: 1;
  transform: scale(1.05);
  z-index: 1;
}

.introduce {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 0 15px;
  background: rgba(216, 214, 214, 0.6);
  border-radius: 0 0 20px 20px;
}

.introduce p,
h4 {
  color: var(--textColor);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  margin: 10px 0;
}

h4 {
  font-size: clamp(14px, 1.2vw, 18px);
}

p {
  font-size: clamp(12px, 1vw, 16px);
}

ul:hover > :not(:hover) {
  filter: brightness(0.7);
  transform: scale(0.95);
}

img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.default {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(229, 121, 121);
  width: 100%;
  text-align: center;
}

/* 媒体查询 */
@media screen and (max-width: 1200px) {
  li {
    --size: clamp(180px, 25%, 250px);
  }
}

@media screen and (max-width: 768px) {
  .carousel {
    min-height: 300px;
  }

  li {
    --size: clamp(150px, 40%, 200px);
  }

  .introduce {
    padding: 0 10px;
  }
}

@media screen and (max-width: 480px) {
  .carousel {
    min-height: 250px;
  }

  li {
    --size: clamp(130px, 80%, 180px);
  }

  ul {
    gap: 15px;
  }

  .introduce {
    padding: 0 8px;
  }

  h4 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }
}
</style>


