import { createStore } from "vuex";

import locationsModule from "./modules/locations/index.js";
import picturesModule from "./modules/pictures/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    pictures: picturesModule,
    locations: locationsModule
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
});

export default store;
