import axios from "axios";
import i18n from "@/i18n";

export default {
  async loadLocations(context) {
    const locations = [];

    await axios
      .get("https://cmsapi.algebra.hr:50073/api/locations")
      .then((response) => {
        if (response.data.isSuccessful) {
          for (const id in response.data.locations) {
            const location = {
              id: response.data.locations[id].id,
              name: response.data.locations[id].name,
              city: response.data.locations[id].city,
              classrooms: response.data.locations[id].classrooms,
              isActive: false,
            };
            locations.push(location);
          }
        }
      })
      .catch(() => {
        const error = new Error(i18n.global.t("errorWhileFetchingLocations"));
        throw error;
      });

    context.commit("setLocations", locations);
  },
};
