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
  {
    path: '/project',
    name: 'project',
    redirect: { name: 'project-recruit' },
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: 'recruit',
        name: 'project-recruit',
        component: () => import('@/views/Project/recruit'),
      },
    ],
  },
  {
    path: '/study',
    name: 'study',
    redirect: { name: 'study-recruit' },
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: 'recruit',
        name: 'study-recruit',
        component: () => import('@/views/Study/recruit'),
      },
    ],
  },
];
