import axios from "axios";
//import i18n from "@/i18n";

const CryptoJS = require("crypto-js");
const requiredUsername = "AlgebraCMS2022";
const requiredPassword = "cmsalgebra29042022";
const passphrase = "algebracmskey";

const loginUrl = "https://cmsapi.algebra.hr/api/login";
const headers = {
  'api-key': process.env.VUE_APP_API_KEY
}

export default {
  loginUser(context, payload) {
    if (payload.username === requiredUsername && payload.password === requiredPassword) {
      const ciphertext = CryptoJS.AES.encrypt(`${payload.username}${payload.password}`, passphrase).toString();
      context.commit("setUser", ciphertext);
    }
  },
  async login(context, payload) {
    const data = {
      username: payload.username,
      password: payload.password
    }
    await axios
      .post(loginUrl, data, {headers: headers})
      .then((response) => {
        if (response.data.isSuccessful && response.data.token !== null) {
          console.log(response.data.token)
          const bytes = CryptoJS.AES.decrypt(response.data.token, process.env.VUE_APP_SECRET)
          //const userCredentials = bytes.toString(CryptoJS.enc.Utf8);
          console.log(bytes);
        }
      })
      .catch((error) => {
        // const baseError = `${i18n.global.t('errorWhileUploadingImageForClassroom')} ${i18n.global.t('pleaseTryAgainLater')}`;       
        // if (error.response) {
        //   throw new Error(i18n.global.t(error.response.data.errorCode) || baseError);
        // }
        throw new Error(error.response);
      });
  },
  checkUserCredentials(state) {
    console.log(state.user);
    if (state.user) {
      const bytes = CryptoJS.AES.decrypt(state.user, passphrase);
      const userCredentials = bytes.toString(CryptoJS.enc.Utf8);
      return userCredentials === `${state.user.username}${state.user.password}`;
    }
    return false;
  }
};
