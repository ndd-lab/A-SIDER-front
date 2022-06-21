// import { getToken, removeToken, setToken } from '@/utils/token';
import { setToken } from '@/utils/token';
export const state = {
  // accessToken: getToken() ? getToken() : '',
  accessToken: 'test',
  showLoginModal: false,
};

export const mutations = {
  SET_ACCESS_TOKEN(state, value) {
    state.accessToken = value;
    setToken(value);
  },
  SET_SHOW_LOGIN_MODAL(state, value) {
    state.showLoginModal = value;
  },
};

export const getters = {
  isLoggedIn(state) {
    return !!state.accessToken;
  },
};

export const actions = {
  logout({ commit }) {
    commit('SET_ACCESS_TOKEN', '');
  },
  setShowLoginModal({ commit }, value) {
    commit('SET_SHOW_LOGIN_MODAL', value);
  },
};
