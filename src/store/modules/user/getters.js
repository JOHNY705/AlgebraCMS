//const CryptoJS = require("crypto-js");
//const requiredUsername = "CMSAdmin";

export default {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    if (state.user) {
      return state.user.Username === process.env.VUE_APP_USERNAME && state.user.Role === process.env.VUE_APP_USER_ROLE;
    }
    return false;
  },
};
