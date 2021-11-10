import VueRouter from 'vue-router';
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: resolve => require(['./App.vue'], resolve)
  }
];
const router = new VueRouter({
  routes
});

export default router;
