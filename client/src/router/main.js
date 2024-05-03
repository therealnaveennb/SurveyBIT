import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../view/LoginPage.vue';
import NotFound from '../view/NotFound.vue';
import HomePage from '../view/HomePage.vue';
import FormPage from '../view/FormPage.vue';
import FormView from '../view/FormView.vue';
import ProfileView from '@/view/ProfileView.vue';
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
  {
    path: '/form',
    name: 'Form',
    component: FormPage,
    meta: { layout: 'empty' },
  },
  {
    path: '/formview',
    name: 'FormView',
    component: FormView,
    meta: { layout: 'empty' },
  },
  {
    path: '/profileview',
    name: 'ProfileView',
    component: ProfileView,
    meta: { layout: 'empty' },
  },   
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
