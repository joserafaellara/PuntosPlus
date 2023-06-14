import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
state: () => {
return { isLogin: false, user: { mail: '' } }
},
getters:{
    isLoginn(){
        return this.isLogin
    }
},
actions: {
logout() {
this.isLogin = false
},
login(user) {
this.isLogin = true
this.user = user
}
},
})