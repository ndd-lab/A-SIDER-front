import store from '@/store/store';

export function authCheck() {
  if (!store.getters.isLoggedIn) {
    store.dispatch('auth/setShowLoginModal', true);
    return false;
  }
  return true;
}
