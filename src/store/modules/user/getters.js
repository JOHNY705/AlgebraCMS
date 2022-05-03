const CryptoJS = require("crypto-js");
const requiredUsername = "AlgebraCMS2022";
const requiredPassword = "cmsalgebra29042022";
const passphrase = "algebracmskey";

export default {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    if (state.user) {
      const bytes = CryptoJS.AES.decrypt(state.user, passphrase);
      const userCredentials = bytes.toString(CryptoJS.enc.Utf8);
      return userCredentials === `${requiredUsername}${requiredPassword}`;
    }
    return false;
  },
};
