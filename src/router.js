import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./pages/LoginPage.vue";
import AccessDeniedPage from "./pages/AccessDeniedPage.vue";
import HomePage from "./pages/HomePage.vue";
import ClassroomDetails from "./pages/ClassroomDetails.vue";
import store from "./store/index.js";
import { Role } from './utils/role.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/AccessDenied",
      name: "AccessDenied",
      component: AccessDeniedPage,
      meta: { authorize: [] }
    },
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: { componentsEnabled: true, authorize: [] },
    },
    {
      path: "/Media/:locationID/Classroom/:classroomID",
      component: ClassroomDetails,
      meta: { componentsEnabled: true, authorize: [Role.CMSAdmin] },
    },
  ],
  linkActiveClass: "active",
});

router.beforeEach(async (to, from, next) => {

  const { authorize } = to.meta;

  if (authorize) {
    if (!store.getters["user/isAuthenticated"]) {
      return next({ name: "Login" });
    }

    if (authorize.length && !authorize.includes(store.getters["user/userRole"])) {
      return next({ name: "AccessDenied" });
    }
  }

  next();
});

export default router;
