import { decryptToken } from "../../../utils/decription.js";
import { Role } from '../../../enums/role.js';

export default {
  username(state) {
    return state.username;
  },
  token(state) {
    return state.token;
  },
  userRole(state) {
    return JSON.parse(decryptToken(state.token)).Role;
  },
  isAuthenticated(state) {
    if (state.token) {
      const user = JSON.parse(decryptToken(state.token));
      const roles = Object.values(Role);
      return (!!user.Username && roles.includes(user.Role));
    }
    return false;
  },
};
