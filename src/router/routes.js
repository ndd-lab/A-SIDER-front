export const routes = [
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
