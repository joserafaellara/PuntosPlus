<template>
  <v-card id="contenedor">
    <v-card-title>Lista de Clientes</v-card-title>
    <v-card-text>
      <user-list-component :users="users"></user-list-component>
    </v-card-text>
  </v-card>
</template>

<script>
import UserListComponent from '@/components/UserListComponent.vue';
import usersList from '../service/usersList';

export default {
  components: {
    UserListComponent
  },
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.cargarClients();
  },
  methods: {
    async cargarClients() {
      try {
        this.users = await usersList.cargarUsers();
      } catch (error) {
        alert("error de conexion");
      }
    }
  }
};
</script>

<style>
#contenedor {
  position: relative;
  top:5%;
  margin:auto;
  max-width: 80%;
}
</style>
