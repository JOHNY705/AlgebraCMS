import { createStore } from "vuex";

import locationsModule from "./modules/locations/index.js";
import picturesModule from "./modules/pictures/index.js";

const store = createStore({
  modules: {
    pictures: picturesModule,
    locations: locationsModule
  },
});

export default store;
