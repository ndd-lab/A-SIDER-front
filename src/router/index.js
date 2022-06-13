import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Layout-home',
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
