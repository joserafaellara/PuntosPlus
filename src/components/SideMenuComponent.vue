<template>
  <v-navigation-drawer
    :value="drawer"
    @input="$emit('update:drawer', $event)"
    app
    permanent
    expand-on-hover
    :mini-variant-width="miniVariantWidth"
    class="menu-drawer"
  >
    <v-list>
      <template v-for="item in menuItems">
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
</template>

<script>
import { useLoginStore } from "@/stores/login";
import { storeToRefs } from 'pinia'; 

export default {
  name: "SideMenuComponent",
  props: {
    drawer: Boolean
  },
  data() {
    return {
      menuItems: [
        { title: 'Productos', icon: 'mdi-cart', route: '/products' },
        { title: 'Registrarse', icon: 'mdi-account-plus', route: '/register' },
        { title: 'Registrar Venta', icon: 'mdi-account-cash', route: '/registerpoint' },
        { title: 'Clientes', icon: 'mdi-account-group', route: '/clients' }
      ],
      miniVariantWidth: 960
    };
  },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);

    const showMenuItem = (item) => {
      if (item.title === 'Registrarse') {
        return !isLogin.value;
      } else if (item.title === 'Registrar Venta' || item.title === 'Clientes') {
        return isLogin.value && user.value.permissions.includes('admin');
      } else {
        return true;
      }
    };

    return { isLogin, showMenuItem };
  }
};
</script>

<style scoped>
.menu-drawer {
  z-index: 2;
}
</style>
