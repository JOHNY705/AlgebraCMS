import axios from "axios";
import i18n from "@/i18n";

const picturesBaseUrl = "https://cmsapi.algebra.hr/api/pictures";
const headers = {
  'api-key': process.env.VUE_APP_API_KEY
}

export default {
  async loadPictures(context, payload) {
    const pictures = [];

    const loadPicturesURL =
      payload.classroomID === 0
        ? picturesBaseUrl + "/shared"
        : picturesBaseUrl + `/${payload.classroomID}`;

    await axios
      .get(loadPicturesURL, {
        headers: {
          'api-key': process.env.VUE_APP_API_KEY
        }
      })
      .then((response) => {
        if (response.data.isSuccessful) {
          pictures.push(...response.data.pictures);
        }
      })
      .catch(() => {
        throw new Error(`${i18n.global.t('errorWhileFetchingImagesForClassroom')} ${i18n.global.t('pleaseTryAgainLater')}`);
      });

    context.commit("setPictures", pictures);
  },
  async addPicture(context, payload) {
    const data = {
      base64Picture: payload.picture.split(",")[1],
      classroomId: payload.classroomID,
      username: payload.username,
      password: payload.password
    }
    await axios
      .post(picturesBaseUrl, data, {headers: headers})
      .then((response) => {
        context.commit("addPicture", response.data);
      })
      .catch((error) => {
        const baseError = `${i18n.global.t('errorWhileUploadingImageForClassroom')} ${i18n.global.t('pleaseTryAgainLater')}`;       
        if (error.response) {
          throw new Error(i18n.global.t(error.response.data.errorCode) || baseError);
        }
        throw new Error(baseError);
      });
  },
  async deletePicture(context, payload) {
    await axios
      .delete(picturesBaseUrl, {
        data: {
          pictureId: payload.pictureID,
          classroomId: payload.classroomID,
          isShared: payload.classroomID === 0 ? true : false,
        },
        headers: headers
      })
      .then(() => {
        context.commit("removePicture", payload);
      })
      .catch(() => {
        throw new Error(`${i18n.global.t("errorWhileDeletingImageForClassroom")} ${i18n.global.t('pleaseTryAgainLater')}`);
      });
  },
};
