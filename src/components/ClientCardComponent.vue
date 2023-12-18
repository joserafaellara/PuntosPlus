<template>
    <v-card class="elevation-12">
      <v-card-title>Cliente:</v-card-title>
      <v-card-text>
        <div v-if="cliente">
          <p>Nombre: {{ cliente.nombre }}</p>
          <p>Apellido: {{ cliente.apellido }}</p>
          <p>Puntos total: {{ cliente.puntos }}</p>
          <p>ID: {{ cliente.id }}</p>
        </div>
        <div v-else>
          <p>No se ha registrado un cliente aún.</p>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      cliente: Object,
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 24px;
  }
  </style>
  