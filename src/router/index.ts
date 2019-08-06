import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 路由懒加载
const lazy = path => () => import(`@/views/${path}`);
import login from './../views/';

// 权限路由
export const asyncRoutesMap = [];

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: lazy('auth/login'),
    },
    {
      path: '/',
      component: () => import('@/layouts/Default/index.vue'),
    },
  ],
});

// 登录控制
// router.beforeEach((to, form, next) => {
//   console.log(to, form);
//   console.log(window.localStorage.getItem('token'));
//   if (to.path !== '/login' && !window.localStorage.getItem('token')) {
//     console.log(123);
//     next('/login');
//     return;
//   }
// });

export default router;