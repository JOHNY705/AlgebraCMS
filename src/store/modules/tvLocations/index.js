import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    tvLocations: [
      {
        id: 233,
        name: "Gradišćanska",
        city: "Zagreb",
        isActive: false,
        type: "TV",
        televisions: [{
          id: 4584,
          name: "TV010A",
          type: "Schedule"
        }, 
        {
          id: 4585,
          name: "TV190A1",
          type: "Horizontal"
        },
        {
          id: 4586,
          name: "TV190A2",
          type: "Horizontal"
        },
        {
          id: 4587,
          name: "TV020B1",
          type: "Vertical"
        },
        {
          id: 4588,
          name: "TV020B2",
          type: "Vertical"
        },
        {
          id: 4589,
          name: "TV020B3",
          type: "Vertical"
        },
        {
          id: 4590,
          name: "TV020B4",
          type: "Horizontal"
        },
        {
          id: 4591,
          name: "TV020B5",
          type: "Horizontal"
        },
        {
          id: 4592,
          name: "TV470B1",
          type: "Horizontal"
        },
        {
          id: 4593,
          name: "TV470B2",
          type: "Schedule"
        },
      ]
      }
    ]
  },
  mutations,
  actions,
  getters,
};
