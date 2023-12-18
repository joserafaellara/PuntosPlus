<template>
    <v-app-bar app color="primary" dark class="menu-bar">
      <v-app-bar-nav-icon @click.stop="$emit('toggleDrawer')"></v-app-bar-nav-icon>
      <v-toolbar-title>Puntos Plus</v-toolbar-title>
      
      
      <v-avatar v-if="isLogin" :image="userAvatar" size="38"></v-avatar>
      <span v-if="isLogin">User: {{ user.mail }}</span>

      <v-spacer class="size"></v-spacer>
  
      <v-btn v-if="!isLogin" to="/login" text>
        <v-icon left>mdi-login</v-icon> Ir a Login
      </v-btn>
      <v-btn v-if="isLogin" to="/logout" text>
        <v-icon left>mdi-logout</v-icon> Ir a Logout
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  import { storeToRefs } from "pinia";
  import { useLoginStore } from "@/stores/login"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
  
  export default {
    name: "NavbarComponent",
    emits: ['toggleDrawer'],
    setup() {
      const store = useLoginStore();
      const { isLogin, user } = storeToRefs(store);
      const userAvatar = "../images/avatar.jpg"; // Ruta del avatar (ajustar según sea necesario)
  
      return { isLogin, user, userAvatar };
    }
  };
  </script>
  
  <style scoped>

  .size{
    max-width: 10px;
  }
  .menu-bar {
    position: relative;
    z-index: 1;
  }
  </style>
  