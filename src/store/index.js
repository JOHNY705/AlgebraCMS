import { createStore } from "vuex";

import locationsModule from "./modules/locations/index.js";
import picturesModule from "./modules/pictures/index.js";
import userModule from "./modules/user/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    pictures: picturesModule,
    locations: locationsModule,
    user: userModule
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
});

export default store;
