import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../view/LoginPage.vue';
import NotFound from '../view/NotFound.vue';
import HomePage from '../view/HomePage.vue';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    meta: { layout: 'empty' },
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: { layout: 'empty' },
  },
  
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
