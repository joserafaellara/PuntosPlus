<template>
  <v-app>
    <navbar-component @toggleDrawer="toggleDrawer"></navbar-component>
    <side-menu-component
      :drawer="drawer"
      @update:drawer="drawer = $event"
    ></side-menu-component>

    <v-main class="page-content">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import SideMenuComponent from "@/components/SideMenuComponent.vue";

export default {
  components: {
    NavbarComponent,
    SideMenuComponent
  },
  data() {
    return {
      drawer: true,
      miniVariantWidth: 960
    };
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
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style>
.page-content {
  position: relative;
  z-index: 0;
}
</style>
