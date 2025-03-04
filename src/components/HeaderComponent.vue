<template>
  <div class="content">
    <div class="container">
      <!-- 左侧 Logo 区域 -->
      <div class="left-section">
        <div class="navlogo">
          <router-link to="/"></router-link>
          <div class="bubble">达咩!</div>
        </div>
      </div>

      <!-- 中间导航区域 -->
      <nav class="center-section">
        <ul class="nav-list">
          <li>
            <router-link to="/" exact active-class="active">首页</router-link>
          </li>
          <li>
            <router-link to="/recreation" exact active-class="active"
              >娱乐</router-link
            >
          </li>
          <li>
            <router-link to="/findings" exact active-class="active"
              >发现</router-link
            >
          </li>
          <li>
            <router-link to="/introduction" exact active-class="active"
              >简介</router-link
            >
          </li>
          <li>
            <router-link to="/about" exact active-class="active"
              >关于本站</router-link
            >
          </li>
        </ul>
      </nav>

      <!-- 右侧功能区域 -->
      <div class="right-section">
        <div class="seachInput">
          <input type="text" placeholder="搜索文章" class="search" />
          <button class="btn">搜索</button>
        </div>

        <div class="localWeather responsive-hide">
          <iframe
            allowtransparency="true"
            frameborder="0"
            width="180"
            height="36"
            scrolling="no"
            src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=0&v=0&d=3&bd=0&k=000000&f=&ltf=8080ff&htf=cc0000&q=1&e=1&a=1&c=57494&w=180&h=36&align=center"
          ></iframe>
        </div>

        <div class="toggleThemes">
          <div :class="theme" @click="toggleTheme"></div>
          <div class="dark">🌙</div>
          <div class="light">🌞</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    toggleTheme() {
      this.$store.commit("toggleTheme");
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
  text-decoration: none;
}
.content {
  width: 100%;
  min-height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
}

.container {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: #e9e7ef solid 2px;
}

/* 左侧区域样式 */
.left-section {
  flex: 0 0 auto;
}

.navlogo {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  background-image: url(../assets/imgs/cocan.jpg);
  background-size: cover;
  transition: all 0.8s;
}

/* 中间导航区域样式 */
.center-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav-list li a {
  color: var(--textColor);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
  transition: all 0.3s;
}

/* 右侧功能区域样式 */
.right-section {
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  gap: 20px;
}

.seachInput {
  display: flex;
  align-items: center;
}

.search {
  width: 200px;
  height: 36px;
  border-radius: 18px 0 0 18px;
  border: 1px solid #ddd;
  padding: 0 15px;
  outline: none;
}

.btn {
  height: 36px;
  padding: 0 15px;
  border: none;
  border-radius: 0 18px 18px 0;
  background: var(--btn);
  color: white;
  cursor: pointer;
}

/* 响应式布局 */
@media screen and (max-width: 1200px) {
  .responsive-hide {
    display: none;
  }

  .nav-list {
    gap: 1rem;
  }
}

@media screen and (max-width: 900px) {
  .container {
    flex-direction: column;
    padding: 10px;
  }

  .right-section {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .seachInput {
    width: 100%;
    justify-content: center;
  }

  .search {
    width: 60%;
  }
}

@media screen and (max-width: 600px) {
  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .nav-list li a {
    font-size: 0.8rem;
    padding: 3px 8px;
  }

  .navlogo {
    width: 60px;
    height: 60px;
  }

  .search {
    width: 70%;
  }
}
.navlogo:hover {
  background-image: url(../assets/imgs/xiaolan.jpg);
  background-size: cover;
  transform: scale(1.2);
}
.navlogo:hover .bubble {
  opacity: 1;
}
.navlogo a {
  display: block;
  height: 100px;
}
/* 气泡框 */
.bubble {
  display: inline-block;
  padding: 10px;
  background-color: var(--buddle);
  color: var(--textColor);
  border-radius: 10px;
  position: absolute;
  width: 2.8em;
  height: 1.5em;
  font-size: 0.8em;
  font-weight: 800;
  font-family: "Courier New", Courier, monospace;
  top: 10px;
  left: 6rem;
  opacity: 0;
  transition: all 0.5s;
  line-height: 25px;
}
.bubble::before {
  content: "";
  width: 2rem;
  height: 2rem;
  clip-path: polygon(100% 31%, 40% 53%, 100% 69%);
  background-color: var(--buddle);
  position: absolute;
  top: 0.5rem;
  left: -1.9rem;
  z-index: 99;
}

/* 被选中后的样式 */
.active {
  opacity: 1;
  background-color: var(--active);
  border-radius: 40px;
}

/* 主题切换样式 */
.toggleThemes {
  width: 90px;
  height: 2em;
  padding: 10px;
  box-sizing: border-box;
  background-color: var(--textColor);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.lightTheme,
.darkTheme {
  position: absolute;
  right: 10px;
  line-height: 2.5em;
  background-color: var(--toggle);
  transition: all 0.2s linear;
}
.lightTheme {
  transform: translateX(0px);
}
.darkTheme {
  transform: translateX(-45px);
}
.dark,
.light,
.lightTheme,
.darkTheme {
  width: 25px;
  height: 25px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.1rem;
}
</style>