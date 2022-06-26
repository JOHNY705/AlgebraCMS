import { createStore } from "vuex";

import locationsModule from "./modules/locations/index.js";
import tabletLocationsModule from "./modules/tabletLocations/index.js";
import tvLocationsModule from "./modules/tvLocations/index.js";
import picturesModule from "./modules/pictures/index.js";
import userModule from "./modules/user/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    locations: locationsModule,
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
