import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ClassroomDetails from "./pages/ClassroomDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, meta: { componentsEnabled: true } },
    {
      path: "/Media/:locationID/Classroom/:classroomID",
      component: ClassroomDetails,
      meta: { componentsEnabled: true },
    },
  ],
  linkActiveClass: "active",
});

export default router;
