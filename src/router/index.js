import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/demo', name: 'Demo', component: () => import('@/views/Demo.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
