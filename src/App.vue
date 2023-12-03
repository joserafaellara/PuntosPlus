
<script>
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";

export default {
  data() {
    return {
      drawer: true,
      miniVariant: false,
      clipped: false,
      menuItems: [
        { title: 'Productos', icon: 'mdi-cart', route: '/products' },
        { title: 'Registrarse', icon: 'mdi-account-plus', route: '/register'},
        { title: 'Registrar Venta', icon: 'mdi-account-cash', route: '/registerpoint' },
        { title: 'Clientes', icon: 'mdi-account-group', route: '/clients' }
      ],
      miniVariantWidth: 960 // Ancho en píxeles en el que se cambia al modo mini-variant
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    handleResize() {
      if (window.innerWidth <= this.miniVariantWidth && !this.drawer) {
        this.drawer = true;
      }
    },
    showMenuItem(item){
      if (item.title === 'Registrarse') {
      return !this.isLogin;
    }
    else if(item.title === 'Registrar Venta'){
      return this.isLogin && this.hasPermissions('admin')
    }else if(item.title === 'Clientes'){
      return this.isLogin && this.hasPermissions('admin')
    }else {
      return true;
    }
    }
  },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store)
    const { hasPermissions} = store
    return { isLogin, user , hasPermissions}
  },
};
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      permanent
      expand-on-hover
      :mini-variant-width="miniVariantWidth"
      class="menu-drawer"
    >
      <v-list>
        <template v-for ="item in menuItems"> 
        <v-list-item
          v-if="showMenuItem(item)"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      </v-list>
      
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      class="menu-bar"
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Puntos Plus</v-toolbar-title>
      <v-avatar class="mr-2" v-if="isLogin" image="../images/avatar.jpg" size="38"></v-avatar>
      <span v-if="isLogin">User: {{ user.mail }}</span>
      <v-bottom  color="primary"> 
        <v-btn v-if="!isLogin" to="login"> <v-icon left>mdi-login</v-icon> Ir a Login </v-btn>
        
        <v-btn v-if="isLogin" to="logout"> <v-icon left>mdi-logout</v-icon> Ir a Logout </v-btn>
        
      </v-bottom>
    </v-app-bar>

    <v-content class="page-content">
      <router-view ></router-view>
    </v-content>
    
  </v-app>
</template>

<style>
.menu-bar {
  position: relative;
  z-index: 1;
}

.page-content {
  position: relative;
  z-index: 0;
}

.menu-drawer {
  z-index: 2;
}
</style>
