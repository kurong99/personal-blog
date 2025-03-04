<template>
  <div class="footer">
    <div class="footer-container">
      <!-- 左侧版权信息 -->
      <div class="footer-section footer-left">
        <div class="copyright">
          <span>Copyright © 2024 Cocan</span>
        </div>
      </div>

      <!-- 中间运行时间 -->
      <div class="footer-section footer-center">
        <div class="runtime">
          此网站已经运行了
          <span>{{ runDay }}</span
          >天 <span>{{ runHour }}</span
          >小时 <span>{{ runMin }}</span
          >分钟 <span>{{ runSecond }}</span
          >秒
        </div>
      </div>

      <!-- 右侧社交链接 -->
      <div class="footer-section footer-right">
        <div class="contact-title">
          <h4>联系我:</h4>
        </div>
        <ul class="social-links">
          <li>
            <a href="https://github.com/Kurong21" target="_blank">
              <img src="../assets/imgs/svg/githublogo.svg" alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://blog.csdn.net/weixin_47622761?type=blog"
              target="_blank"
            >
              <img src="../assets/imgs/svg/csdnlogo.svg" alt="CSDN" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="../assets/imgs/svg/wechatlogo.svg" alt="WeChat" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      timer: null,
      difference: 0,
      startDate: new Date(2024, 4, 21, 20, 36, 40)  // 将起始时间提取为数据属性
    }
  },
  computed: {
    runDay() {
      if (!this.difference) return 0;
      return Math.floor(this.difference / (24 * 3600 * 1000));
    },
    runHour() {
      if (!this.difference) return 0;
      return Math.floor((this.difference % (24 * 3600 * 1000)) / (3600 * 1000));
    },
    runMin() {
      if (!this.difference) return 0;
      return Math.floor(
        ((this.difference % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000)
      );
    },
    runSecond() {
      if (!this.difference) return 0;
      return Math.round(
        (((this.difference % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000
      );
    }
  },
  methods: {
    // 将计时逻辑提取为方法
    updateDifference() {
      try {
        this.difference = -(this.startDate - new Date());
      } catch (error) {
        console.error('时间计算出错:', error);
        this.difference = 0;
      }
    },
    // 初始化定时器
    initTimer() {
      this.updateDifference(); // 立即执行一次
      this.timer = setInterval(this.updateDifference, 1000);
    },
    // 清理定时器
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  },
  mounted() {
    this.initTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  }
}
</script>
  
<style scoped>
.footer {
  width: 100vw;
  min-height: 4.9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}

.footer-container {
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer-section {
  flex: 1;
  display: flex;
  align-items: center;
}

/* 左侧版权信息 */
.footer-left {
  justify-content: flex-start;
}

.copyright span {
  font-size: 1.2rem;
  font-weight: bold;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--footerGradient);
  animation: rotate 3s linear infinite;
  background-size: 200% auto;
}

/* 中间运行时间 */
.footer-center {
  justify-content: center;
}

.runtime {
  font-weight: bold;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--footerGradient);
  animation: rotate 2s linear infinite;
  background-size: 200% auto;
  white-space: nowrap;
}

.runtime span {
  font-size: 1.2rem;
}

/* 右侧社交链接 */
.footer-right {
  justify-content: flex-end;
  gap: 15px;
}

.contact-title h4 {
  margin: 0;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--footerGradient);
  animation: rotate 1s linear infinite;
  white-space: nowrap;
}

.social-links {
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.social-links img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.social-links img:hover {
  transform: scale(1.2) translateY(-5px);
}

@keyframes rotate {
  100% {
    background-position: 200% center;
  }
}

/* 响应式布局 */
@media screen and (max-width: 1024px) {
  .footer-container {
    width: 95%;
  }

  .copyright span {
    font-size: 1rem;
  }

  .runtime span {
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .footer-section {
    justify-content: center;
  }

  .footer-right {
    flex-direction: column;
    gap: 10px;
  }

  .social-links {
    justify-content: center;
  }
}

@media screen and (max-width: 480px) {
  /* .footer {
    padding: 15px;
  } */

  .runtime {
    font-size: 0.9rem;
  }

  .runtime span {
    font-size: 0.9rem;
  }

  .social-links img {
    width: 25px;
    height: 25px;
  }
}
</style>