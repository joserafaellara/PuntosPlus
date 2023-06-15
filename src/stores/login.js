import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => ({
    user: { mail: '', permissions: [] }
  }),

  getters: {
    isLogin(state) {
      return state.user.mail === 'admin@test.com';
    }
  },

  actions: {
    logout() {
      this.user = { mail: '', permissions: [] };
    },

    login(user) {
      this.user = { ...user };
    },

    hasPermissions(access) {
      return this.user.permissions.filter(p => p === access).length > 0 ? true : false;
    }
  }
});
