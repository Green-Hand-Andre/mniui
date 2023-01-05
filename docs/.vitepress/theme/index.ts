import DefaultTheme from 'vitepress/theme';
import '@mniui/theme-chalk/src/index.scss';
import ZIcon from '@mniui/components/icon';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon);
  },
};
