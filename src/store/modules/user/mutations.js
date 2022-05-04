export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  removeUser(state) {
    state.user = null;
  }
};
