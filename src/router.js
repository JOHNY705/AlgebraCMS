import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";
import ClassroomDetails from "./pages/ClassroomDetails.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: { componentsEnabled: true },
    },
    {
      path: "/Media/:locationID/Classroom/:classroomID",
      component: ClassroomDetails,
      meta: { componentsEnabled: true },
    },
  ],
  linkActiveClass: "active",
});

router.beforeEach(async (to) => {
  if(!store.getters["user/isAuthenticated"] && to.name !== "Login") {
    return ({ name: "Login" });
  }
});

export default router;
