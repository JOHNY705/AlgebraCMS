import { createStore } from "vuex";

import tabletLocationsModule from "./modules/tabletLocations/index.js";
import tvLocationsModule from "./modules/tvLocations/index.js";
import picturesModule from "./modules/pictures/index.js";
import userModule from "./modules/user/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    pictures: picturesModule,
    tabletLocations: tabletLocationsModule,
    tvLocations: tvLocationsModule,
    user: userModule
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
});

export default store;
