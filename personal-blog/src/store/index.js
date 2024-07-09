import Vue from 'vue';
import vuex from 'vuex'

Vue.use(vuex);
const store = {
      mutations: {
        toggleTheme (state) {
            state.theme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        }
      },
      state: {
        theme: 'lightTheme',
      },
}

export default new vuex.Store(store);