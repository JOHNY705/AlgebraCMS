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
          id: -1,
          name: "DIJELJENE SLIKE",
          type: "Vertical",
          media: "Image"
        },
        {
          id: 4584,
          name: "TV010A",
          type: "Vertical",
          media: "Image"
        },  
        {
          id: 4585,
          name: "TV190A1",
          type: "Horizontal",
          media: "Video"
        },
        {
          id: 4586,
          name: "TV190A2",
          type: "Horizontal",
          media: "Image"
        },
        {
          id: 4587,
          name: "TV020B1",
          type: "Vertical",
          media: "Image"
        },
        {
          id: 4588,
          name: "TV020B2",
          type: "Vertical",
          media: "Image"
        },
        {
          id: 4589,
          name: "TV020B3",
          type: "Vertical",
          media: "Image"
        },
        {
          id: 4590,
          name: "TV020B4",
          type: "Horizontal",
          media: "Image"
        },
        {
          id: 4591,
          name: "TV020B5",
          type: "Horizontal",
          media: "Image"
        },
        {
          id: 4592,
          name: "TV470B1",
          type: "Horizontal",
          media: "Video"
        },
        {
          id: 0,
          name: "DIJELJENE SLIKE",
          type: "Schedule",
          media: "Image"
        },
      ]
      }
    ]
  },
  mutations,
  actions,
  getters,
};
