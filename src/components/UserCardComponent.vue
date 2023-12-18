<template>
    <v-list-item>
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto">
            <!-- Comprobación de la existencia de la URL del avatar -->
          <v-img v-if="user.avatar" :src="user.avatar" height="40px" width="40px" class="avatar"></v-img>
          <!-- Imagen predeterminada en caso de que no haya avatar -->
          <v-img v-else src="/images/user.jpg" height="40px" width="40px" class="avatar"></v-img>
          </v-col>
          <v-col>
            <v-list-item-title>
              {{ user.nombre }} {{ user.apellido }}
            </v-list-item-title>
            <v-list-item-subtitle>
              Email: {{ user.email }} |
              Teléfono: {{ user.telefono }} |
              Puntos: {{ user.puntos }}
            </v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </template>
  
  <script>
  export default {
    props: {
      user: Object
    }
  };
  </script>
  
  <style>
  .avatar {
    border-radius: 50%;
  }
  </style>
  