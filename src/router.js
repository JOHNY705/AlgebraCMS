import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ClassroomDetails from "./pages/ClassroomDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, meta: {header: 1, sidebar: 1} },
    {
      path: "/Media/Classroom/:id",
      component: ClassroomDetails,
      meta: { header: 1, sidebar: 1 },
    },
  ],
  linkActiveClass: "active",
});

export default router;
