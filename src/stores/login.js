import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => ({
    isLogin: false,
    user: { mail: '', permissions: [] }
  }),
  getters: {
    isLoginn(state) {
      return state.isLogin;
    },
    hasPermissions: (state) => (access) => {
      return state.user.permissions.includes(access);
    }
  },
  actions: {
    logout() {
      this.isLogin = false;
      this.user = { mail: '', permissions: [] };
    },
    login(user) {
      this.isLogin = true;
      this.user = user;
    }
  }
});
