import { Location } from "./../../../enums/location.js";

export default {
  setTabletLocations(state, payload) {
    const tabletLocations = payload;

    for (let i = 0; i < tabletLocations.length; i++) {
      
      var sharedPictures = tabletLocations[i].classrooms.filter(
        (el) => el.name === "Dijeljene slike"
      );

      tabletLocations[i].classrooms = tabletLocations[i].classrooms.filter(
        (el) =>
          el.deviceType === Location.Tablet && el.name !== "Dijeljene slike"
      );

      for (let j = 0; j < tabletLocations[i].classrooms.length; j++) {
        const classroomName = tabletLocations[i].classrooms[j].name
          .replace(/Lecture room/gi, "")
          .trim();
        tabletLocations[i].classrooms[j].name = classroomName;
      }
      tabletLocations[i].classrooms.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true })
      );

      if (sharedPictures !== null && sharedPictures !== undefined) {
        tabletLocations[i].classrooms.unshift(sharedPictures[0]);
      }
    }

    state.tabletLocations = tabletLocations;
  },
};
