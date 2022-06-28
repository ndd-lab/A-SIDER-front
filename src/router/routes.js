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
        component: () => import('@/views/Project/Recruit'),
      },
      {
        path: 'create',
        name: 'project-create',
        component: () => import('@/views/Project/Create'),
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
        component: () => import('@/views/Study/Recruit'),
      },
    ],
  },
  {
    path: '/myPage',
    name: 'myPage',
    redirect: { name: 'myPage-dashboard' },
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: 'dashboard',
        name: 'myPage-dashboard',
        component: () => import('@/views/MyPage/Dashboard'),
      },
      {
        path: 'projectDetail/:seq',
        name: 'myPage-project-detail',
        component: () => import('@/views/MyPage/Project/ProjectDetail'),
      },
    ],
  },
];
