import { Location } from "./../../../enums/location.js";

export default {
  setTabletLocations(state, payload) {
    const tabletLocations = payload;

    for (let i = 0; i < tabletLocations.length; i++) {
      
      var sharedPictures = tabletLocations[i].devices.filter(
        (el) => el.name === "Dijeljene slike"
      );

      tabletLocations[i].devices = tabletLocations[i].devices.filter(
        (el) =>
          el.deviceType === Location.Tablet && el.name !== "Dijeljene slike"
      );

      for (let j = 0; j < tabletLocations[i].devices.length; j++) {
        const deviceName = tabletLocations[i].devices[j].name
          .replace(/Lecture room/gi, "")
          .trim();
        tabletLocations[i].devices[j].name = deviceName;
      }
      tabletLocations[i].devices.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true })
      );

      if (sharedPictures !== null && sharedPictures !== undefined) {
        tabletLocations[i].devices.unshift(sharedPictures[0]);
      }
    }

    state.tabletLocations = tabletLocations;
  },
};
