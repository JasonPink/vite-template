import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';

import App from './App.vue';
import router from './router';
import '@/styles/main.scss';
import 'nprogress/nprogress.css';

import plugin from './plugins';

const app = createApp(App);

app.use(router);
app.use(plugin);
app.use(createPinia());

app.mount('#app');
