import axios from "axios";

const picturesBaseUrl = "https://cmsapi.algebra.hr:50073/api/pictures";

export default {
  async loadPictures(context, payload) {

    const pictures = [];

    const fullURL = payload.classroomID === 0 ? picturesBaseUrl + '/shared' : picturesBaseUrl + `/${payload.classroomID}`;

    await axios
      .get(fullURL)
      .then((response) => {
        if (response.data.isSuccessful) {
          pictures.push(...response.data.pictures);
          console.log(pictures);
        }
      })
      .catch((error) => console.log(error));

    context.commit("setPictures", pictures);
  },
};
