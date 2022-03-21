import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ClassroomDetails from './pages/ClassroomDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/Media/Classroom/:id', component: ClassroomDetails },
  ],
  linkActiveClass: 'active'
});

export default router;