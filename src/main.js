import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';

import App from './App.vue';
import router from './router';
import '@/styles/main.scss';
import 'element-plus/dist/index.css';
import 'nprogress/nprogress.css';
import 'virtual:svg-icons-register';

import plugin from './plugins';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(plugin);
app.use(createPinia());

app.mount('#app');
