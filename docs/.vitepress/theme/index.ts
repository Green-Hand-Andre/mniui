import DefaultTheme from 'vitepress/theme';
import '@mniui/theme-chalk/src/index.scss';
import MIcon from '@mniui/components/icon';
import MButton from '@mniui/components/button';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MIcon);
    app.use(MButton);
  },
};
