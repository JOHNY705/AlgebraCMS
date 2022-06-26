import { Location } from "./../../../enums/location.js";

export default {
  setTVLocations(state, payload) {
    const tvLocations = payload;

    for (let i = 0; i < tvLocations.length; i++) {
      tvLocations[i].devices = tvLocations[i].devices.filter(
        (el) => el.deviceType === Location.TV
      );

      tvLocations[i].devices.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true })
      );
    }

    state.tvLocations = payload;
  },
};
