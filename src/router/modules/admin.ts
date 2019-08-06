const lazy = path => () => import(`@/views/${path}`);

export default [
  {
    path: 'Home',
    name: 'Home',
    meta: { title: '首页' },
    component: lazy('Home'),
  },
];
