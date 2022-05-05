export default {
  setUsername(state, payload) {
    state.username = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  removeUserCredentials(state) {
    state.username = null;
    state.token = null;
  }
};
