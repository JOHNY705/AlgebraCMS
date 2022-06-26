import { Location } from "./../../../enums/location.js";

export default {
    setLocations(state, payload) {
      const locations = payload;
  
      const newLocations = [];

      for (let i = 0; i < locations.length; i++) {
        for (let j = 0; j < locations[i].devices.length; j++) {
          const classroomName = locations[i].devices[j].name
            .replace(/Lecture room/gi, "")
            .trim();
            locations[i].devices[j].name = classroomName;
        }
        locations[i].devices.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { numeric: true })
        );
        //locations[i].devices.unshift({ id: 0, name: "DIJELJENE SLIKE" });
      }

      for (let i = 0; i < locations.length; i++) {
        newLocations.push(locations[i]);
        newLocations.push(locations[i]);
      }

      newLocations[0].type = Location.Tablet;
      newLocations[1].type = Location.TV;
    //   console.log(newLocations);
    //   console.log(locations);
  
      state.locations = locations;
    },
  };