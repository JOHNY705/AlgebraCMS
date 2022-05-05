import axios from "axios";
import i18n from "@/i18n";

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
          context.commit("setUsername", response.data.username);
          context.commit("setToken", response.data.token);
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
    context.commit("removeUserCredentials");
  }
};
