<template>
  <div>
    <aside class="side-component" :class="{ show: isVisible }">
    <div class="about">
      <div class="content">
        <h2>About Author</h2>
        <img src="../assets/imgs/avatar.jpg" alt="avatar" />
        <span>
          "一条咸鱼🐟: 爱好篮球🏀，计算机💻，瞎折腾🎰，浪费时间🕐，最爱冰激凌🍦"
        </span>
      </div>
    </div>
    <div class="skill">
      <div class="skill-item" v-for="skill in skillList" :key="skill.id">
        <div class="skill-text">
          <h6>{{ skill.name }}</h6>
          <h6>{{ skill.proficiency }}</h6>
        </div>
        <div class="skill-bar">
          <div
            class="skill-progress"
            :style="{ width: skill.proficiency }"
          ></div>
        </div>
      </div>
    </div>
    <!-- 添加显示/隐藏按钮 -->
    <div class="toggle-sidebar" @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </div>
  </aside>
  </div>
</template>

<script>
export default {
  name: "SideComponent",
  data() {
    return {
      isVisible: false,
      skillList: [
        {
          id: 1,
          name: "HTML",
          proficiency: "90%",
        },
        {
          id: 2,
          name: "CSS",
          proficiency: "80%",
        },
        {
          id: 3,
          name: "JAVASCRIPT",
          proficiency: "80%",
        },
        {
          id: 4,
          name: "PHP",
          proficiency: "30%",
        },
        {
          id: 5,
          name: "VUE",
          proficiency: "80%",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style scoped>
.side-component {
  margin-top: 50px;
  width: 300px;
  height: 70vh;
  color: var(--textColor);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  flex: 0.5;
  position: sticky;
  top: 12vh;
  transition: all 0.3s ease;
  border-radius: 15px;
  overflow: hidden;
  background: var(--A);
}

.about {
  width: 100%;
  height: 50%;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.content h2 {
  position: relative;
  margin-bottom: 20px;
  color: var(--textColor);
}

.content h2::before {
  content: "";
  width: 50px;
  height: 2px;
  position: absolute;
  left: 50%;
  margin-left: -25px;
  bottom: -5px;
  background-color: var(--btn);
}

.content img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  object-fit: cover;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.content img:hover {
  transform: scale(1.1);
}

.content span {
  text-align: center;
  font-weight: 500;
  line-height: 1.6;
  font-size: 0.9rem;
  padding: 0 15px;
  color: var(--textColor);
}

.skill {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.skill-item {
  width: 100%;
}

.skill-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-text h6 {
  margin: 0;
  font-size: 0.9rem;
  color: var(--textColor);
}

.skill-bar {
  width: 100%;
  height: 6px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background-color: var(--btn);
  border-radius: 3px;
  transition: width 0.8s ease;
}

/* 显示/隐藏按钮样式 */
.toggle-sidebar {
  position: absolute;
  right: 50px;
  top: 400px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--btn);
  color: white;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: transform 0.3s ease;
}

.toggle-sidebar:hover {
  transform: scale(1.1);
}

/* 响应式布局 */
@media screen and (max-width: 1200px) {
  .side-component {
    flex: 0.4;
  }

  .content img {
    width: 100px;
    height: 100px;
  }

  .content span {
    font-size: 0.85rem;
  }
}

@media screen and (max-width: 820px) {
  .side-component {
    display: none;
    opacity: 0;
    transform: translateX(100%);
  }

  .side-component.show {
    width: calc(100% - 80px);
    top: 260px;
    right: 20px;
  }

  .toggle-sidebar {
    display: flex;
  }

  .side-component.show {
    display: block;
    position: fixed;
    right: 20px;
    bottom: 70px;
    width: 300px;
    height: auto;
    max-height: 80vh;
    margin-top: 0;
    z-index: 999;
    opacity: 1;
    transform: translateX(0);
  }
}

@media screen and (max-width: 480px) {
  .side-component.show {
    width: calc(100% - 80px);
    top: 240px;
    right: 20px;
    left: 20px;
  }

  .content h2 {
    font-size: 1.2rem;
  }

  .skill-text h6 {
    font-size: 0.8rem;
  }
}
</style>