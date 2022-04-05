import axios from "axios";

const picturesBaseUrl = "https://cmsapi.algebra.hr:50073/api/pictures/4595";

export default {
  async loadPictures(context) {

    const pictures = [];

    axios
      .get(picturesBaseUrl)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

  context.commit('setPictures', pictures);
  },
};
