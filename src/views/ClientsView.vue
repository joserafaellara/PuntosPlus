<template>
  <v-card id="contenedor">
    <v-card-title>Lista de Clientes</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="cliente in users"
          :key="cliente.id"
        >
          <v-list-item-content>
            <v-row align="center">
              <v-col cols="auto">
                <v-img :src="cliente.avatar" height="40" class="avatar"></v-img>
              </v-col>
              <v-col>
                <v-list-item-title>
                  {{ cliente.nombre }} {{ cliente.apellido }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Email: {{ cliente.email }} |
                  Teléfono: {{ cliente.telefono }} |
                  Puntos: {{ cliente.puntos }}
                </v-list-item-subtitle>
              </v-col>
            </v-row>
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
                this.users = await usersList.cargarUsers();
            }
            catch (error) {
                alert("error de conexion");
            }
        }
    } 
  };
  </script>
  
  <style>
  .avatar{
    border-radius: 50%;
  }
    #contenedor{
    position: relative;
    left:20%;
    top:60px;
    max-width:80%;
    margin:left;
  }
  </style>