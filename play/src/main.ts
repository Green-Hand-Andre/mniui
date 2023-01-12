import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "@mniui/theme-chalk/src/index.scss";
import router from './router'
const app = createApp(App)

app.use(router).mount("#app")
