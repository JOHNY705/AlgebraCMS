import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

import LoginPage from './pages/LoginPage.vue';
import HomePage from "./pages/HomePage.vue";
import ClassroomDetails from "./pages/ClassroomDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Login", name: "login", component: LoginPage
    },
    { path: "/", name: "home", component: HomePage, meta: { componentsEnabled: true } },
    {
      path: "/Media/:locationID/Classroom/:classroomID",
      component: ClassroomDetails,
      meta: { componentsEnabled: true }
    },
  ],
  linkActiveClass: "active",
});

router.beforeEach(async (to) => {
  if (store.getters["locations/locations"] && to.name !== "login") {
    return { name: "login"}
  }
})

export default router;
