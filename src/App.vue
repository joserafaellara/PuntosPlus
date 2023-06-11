<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue';
</script>

<template>
   <v-app>
    <v-navigation-drawer app style="position:absolute">
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.route" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Puntos Plus</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'Iniciar sesión', icon: 'mdi-login', route: '/login' },
        { title: 'Productos', icon: 'mdi-cart', route: '/products' },
        { title: 'Registrarse', icon: 'mdi-account-plus', route: '/register' },
        {title: 'Registrar Venta', icon: 'mdi-account-cash', route: '/registerpoint'}
      ],
    };
  },
};
</script>

