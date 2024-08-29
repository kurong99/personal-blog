import Vue from 'vue';
import vuex from 'vuex'

Vue.use(vuex);

const KEY = "__theme__";
// 拿到缓存的主题 如果没有就使用默认亮色主题
const theme = localStorage.getItem('__theme__') || 'lightTheme';

// 封装一个应用主题函数
const useTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
};

// 首次加载时应用缓存或者默认的主题
useTheme(theme);

const store = {
      mutations: {
        toggleTheme (state) {
          // 根据目前的主题切换
          state.theme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
          useTheme(state.theme);
          // 将当前主题缓存起来
          localStorage.setItem(KEY,state.theme);
        }
      },
      state: {
        theme: theme,
        GITHUB_TOKEN: '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'
      },
}

export default new vuex.Store(store);