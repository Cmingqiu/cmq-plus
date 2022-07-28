import { createApp } from 'vue';
import App from './App.vue';
import cmqPlus from 'cmq-plus';
import '@cmq-plus/theme-chalk/src/index.scss';



const app = createApp(App);
app.use(cmqPlus).mount('#app');
