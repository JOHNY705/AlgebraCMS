import axios from "axios";

const picturesBaseUrl = "https://cmsapi.algebra.hr:50073/api/pictures";

export default {
  async loadPictures(context, payload) {
    const pictures = [];

    const loadPicturesURL =
      payload.classroomID === 0
        ? picturesBaseUrl + "/shared"
        : picturesBaseUrl + `/${payload.classroomID}`;

    await axios
      .get(loadPicturesURL)
      .then((response) => {
        if (response.data.isSuccessful) {
          pictures.push(...response.data.pictures);
        }
      })
      .catch((error) => console.log(error));

    context.commit("setPictures", pictures);
  },
  async addPicture(_, payload) {
    await axios
      .post(picturesBaseUrl, {
        base64Picture: payload.picture.split(",")[1],
        classroomId: payload.classroomID,
        isShared: payload.classroomID === 0 ? true : false,
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async deletePicture(_, payload) {

    await axios
      .delete(picturesBaseUrl, {
        data: {
          pictureId: payload.pictureID,
          classroomId: payload.classroomID,
          isShared: payload.classroomID === 0 ? true : false,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
