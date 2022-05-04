import axios from "axios";
import i18n from "@/i18n";

const CryptoJS = require("crypto-js");

const loginUrl = "https://cmsapi.algebra.hr/api/login";
const headers = {
  'api-key': process.env.VUE_APP_API_KEY
}

export default {
  async login(context, payload) {
    const data = {
      username: payload.username,
      password: payload.password
    }
    await axios
      .post(loginUrl, data, {headers: headers})
      .then((response) => {
        if (response.data.isSuccessful && response.data.token !== null) {
          const crptKey = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_SECRET);
          const crypted = CryptoJS.enc.Base64.parse(response.data.token);
          const bytes = CryptoJS.AES.decrypt({ciphertext: crypted}, crptKey, {
            iv: CryptoJS.enc.Hex.parse('00000000000000000000000000000000')
          });
          const userCredentials = bytes.toString(CryptoJS.enc.Utf8);
          console.log(userCredentials);
          context.commit("setUser", JSON.parse(userCredentials));
        }
      })
      .catch((error) => {
        const baseError = `${i18n.global.t('errorWhileLoggingIn')} ${i18n.global.t('pleaseTryAgainLater')}`;       
        if (error.response) {
          throw new Error(i18n.global.t(error.response.data.errorCode) || baseError);
        }
        throw new Error(error.response);
      });
  },
  logout(context) {
    context.commit("removeUser");
  }
};
