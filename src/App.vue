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
        <v-list-item
          v-for="item in menuItems"
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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      class="menu-bar"
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My Website</v-toolbar-title>
    </v-app-bar>

    <v-content class="page-content">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      miniVariant: false,
      clipped: false,
      menuItems: [
        { title: 'Iniciar sesión', icon: 'mdi-login', route: '/login' },
        { title: 'Productos', icon: 'mdi-cart', route: '/products' },
        { title: 'Registrarse', icon: 'mdi-account-plus', route: '/register' },
        { title: 'Registrar Venta', icon: 'mdi-account-cash', route: '/registerpoint' }
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
    }
  }
};
</script>



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
