import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, user: { mail: '' , permissions: []} }
    },
    getters:{
        isLoginn(){
            return this.isLogin
        }
    },
    actions: {
        logout() {
            this.isLogin = false
            this.user = { mail: '' , permissions: []}
        },
        login(user) {
            this.isLogin = true
            this.user = user
        },
        hasPermissions(acces) {
        return this.user.permissions.filter(p=>p==acces).length > 0 ? true : false 
        }
    },

})