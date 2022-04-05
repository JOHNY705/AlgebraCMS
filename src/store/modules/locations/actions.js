import axios from "axios";

export default {
  async loadLocations(context) {

    if (sessionStorage.locations) {
      context.commit("setLocations", JSON.parse(sessionStorage.locations));
      return;
    }

    const locations = [];

    axios
      .get("https://cmsapi.algebra.hr:50073/api/locations")
      .then((response) => {
        if (response.data.isSuccessful) {
          for (let i = 0; i < response.data.locations.length; i++) {
            for (let j = 0; j < response.data.locations[i].classrooms.length; j++) {
              const classroomName = response.data.locations[i].classrooms[j].name.replace(/Lecture room/ig, "").trim();
              response.data.locations[i].classrooms[j].name = classroomName;
            }
          }
          for (const id in response.data.locations) {
            const location = {
              id: response.data.locations[id].id,
              name: response.data.locations[id].name,
              city: response.data.locations[id].city,
              classrooms: response.data.locations[id].classrooms.sort(
                (a, b) => a.name.localeCompare(b.name, undefined, {numeric: true})),
              isActive: false,
            }
            locations.push(location);
          }   
          sessionStorage.locations = JSON.stringify(locations);
        } else {
          console.log("Error: " + response.data.exceptionMessage);
        }
      })
      .catch((error) => console.log(error));

    context.commit("setLocations", locations);
  },
};
