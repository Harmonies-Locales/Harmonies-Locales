import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/home',
      },
      { path: 'home', component: () => import('pages/AccueilPage.vue') },
      {
        path: 'login',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: 'calendrier',
        component: () => import('pages/CalendrierPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'archives',
        component: () => import('pages/ArchivePage.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
