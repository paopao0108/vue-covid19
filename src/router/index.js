import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  // {
  //   // 示例
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/',
    name: 'home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
