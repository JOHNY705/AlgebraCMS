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
      beforeEnter: checkUserRole,
      component: ClassroomDetails,
      meta: { componentsEnabled: true },
    },
  ],
  linkActiveClass: "active",
});

function checkUserRole(to, from, next) {
  if(store.getters["user/user"].Role === "CMS.Admin1") {
    next()
  } else {
    next()
  }
}

router.beforeEach(async (to) => {
  if(!store.getters["user/isAuthenticated"] && to.name !== "Login") {
    return ({ name: "Login" });
  }
});

export default router;
