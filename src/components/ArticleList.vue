<template>
  <div class="article-list">
    <TitleComponent>文章"轴"</TitleComponent>
    <div class="timelines">
      <div class="timeline-container">
        <div
          class="timeline"
          v-for="(item, index) in items"
          :key="item.id"
          :class="[
            { 'fade-in-right': isLoad },
            { 'timeline-left': index % 2 === 0 },
            { 'timeline-right': index % 2 === 1 },
          ]"
        >
          <router-link :to="`/article/${item.type}/${item.name}`">
            <div class="timeline-content">
              <div class="timeline-date">{{ item.date }}</div>
              <div class="timeline-card">
                <h2 class="timeline-title">{{ item.name }}</h2>
                <p class="content-details">{{ item.introduction }}</p>
              </div>
              <div class="timeline-dot"></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "./TitleComponent";
import common from "../utills/common";

export default {
  name: "ArticleList",
  components: {
    TitleComponent,
  },
  data() {
    return {
      isLoad: false,
      items: [],
    };
  },
  mounted() {
    window.addEventListener("load", this.handleLoad);
  },
  created() {
    this.items = common;
  },
  methods: {
    handleLoad() {
      this.isLoad = true;
    },
  },
  beforeDestroy() {
    window.removeEventListener("load", this.handleLoad);
  },
};
</script>

<style scoped>
.article-list {
  width: 100%;
  padding: 20px;
  overflow-x: hidden;
}

.timelines {
  width: 90%;
  max-width: 1200px;
  margin: 60px auto;
  position: relative;
}

.timeline-container {
  position: relative;
  padding: 20px 0;
}

.timeline-container::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    to bottom,
    #4f7da7 0%,
    #062f61 8%,
    #526b8a 92%,
    #0b74fd 100%
  );
  transform: translateX(-50%);
  border-radius: 2px;
  z-index: 1;
}

.timeline {
  width: 100%;
  margin-bottom: 40px;
  position: relative;
}

.timeline a {
  text-decoration: none;
}

.timeline-content {
  width: calc(50% - 30px);
  position: relative;
  padding: 0 20px;
  z-index: 2;
}

.timeline-card {
  background: var(--A);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.timeline-title {
  margin: 0 0 10px;
  font-size: 1.4rem;
  color: var(--textColor);
}

.content-details {
  color: var(--textColor);
  opacity: 0.8;
  margin: 0;
  line-height: 1.6;
}

.timeline-date {
  position: absolute;
  top: 0;
  color: var(--textColor);
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0.8;
}

.timeline-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  background: var(--btn);
  border-radius: 50%;
  top: 15px;
  border: 3px solid var(--A);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

/* 左侧时间轴样式 */
.timeline-left .timeline-content {
  margin-left: auto;
  text-align: right;
}

.timeline-left .timeline-date {
  right: calc(100% + 40px);
}

.timeline-left .timeline-dot {
  right: -38px;
}

/* 右侧时间轴样式 */
.timeline-right .timeline-content {
  margin-right: auto;
  text-align: left;
}

.timeline-right .timeline-date {
  left: calc(100% + 40px);
}

.timeline-right .timeline-dot {
  left: -38px;
}

/* 动画效果 */
.fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 悬停效果 */
.timeline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* 响应式布局 */
@media screen and (max-width: 1024px) {
  .timelines {
    width: 95%;
  }
}

@media screen and (max-width: 768px) {
  .timeline-container::before {
    left: 30px;
  }

  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    text-align: left !important;
  }

  .timeline-date {
    position: relative !important;
    left: 0 !important;
    right: auto !important;
    top: -30px !important;
    margin-bottom: -20px;
  }

  .timeline-dot {
    left: -38px !important;
    right: auto !important;
  }
}

@media screen and (max-width: 480px) {
  .article-list {
    padding: 10px;
  }

  .timeline-card {
    padding: 15px;
  }

  .timeline-title {
    font-size: 1.2rem;
  }

  .content-details {
    font-size: 0.9rem;
  }

  .timeline-date {
    font-size: 0.8rem;
  }
}
</style>