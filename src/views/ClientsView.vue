<template>
    <v-card id="contenedor" cols="6" sm="4" md="3">
      <v-card-title>Lista de Clientes</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="cliente in users"
            :key="cliente.id"
          >
            <v-list-item-content>
              <v-list-item-title>{{ cliente.nombre }} {{ cliente.apellido }}</v-list-item-title>
              <v-list-item-subtitle>
                Email: {{ cliente.email }} |
                Teléfono: {{ cliente.telefono }} |
                Puntos: {{ cliente.puntos }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import usersList from '../service/usersList'
  export default {
    data() {
      return {
          users: [],
          cliente: {},
      };
    },
    mounted() {
        this.cargarClients();
    },
    methods: {
        irAbout() {
            this.$router.push("/about");
        },
        async cargarClients() {
            try {
                this.cliente = await usersList.cargarUsers();
            }
            catch (error) {
                alert("error de conexion");
            }
        }
    } 
  };
  </script>
  
  <style>
    #contenedor{
    position: relative;
    left:20%;
    top:60px;
    max-width:80%;
    margin:left;
  }
  </style>