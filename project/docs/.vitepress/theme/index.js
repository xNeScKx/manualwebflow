import DefaultTheme from 'vitepress/theme';
import Lightbox from './components/Lightbox.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Lightbox', Lightbox);
  },
};

