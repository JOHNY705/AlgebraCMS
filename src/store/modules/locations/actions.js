import axios from "axios";

export default {
  async loadLocations(context) {
    //... koristiti AXIOS
    // const response = await fetch('https://cmsapi.algebra.hr:50073/api/locations');
    // const responseData = await response.json();

    // console.log(responseData);

    const locations = [];

    axios
      .get("https://cmsapi.algebra.hr:50073/api/locations", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.data.isSuccessful) {
          for (const id in response.data.locations) {
            const location = {
              id: response.data.locations[id].id,
              name: response.data.locations[id].name,
              city: response.data.locations[id].city,
              classrooms: response.data.locations[id].classrooms
            };
             locations.push(location);
          }
        }
        else {
          console.log("Error: " + response.data.exceptionMessage);
        }  
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    console.log(locations);

    context.commit("setLocations", locations);
  },
};
