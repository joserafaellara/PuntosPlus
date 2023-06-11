<template>
    <div class="formulario">
        <v-form>
      <v-text-field v-model="nombre" label="Nombre"></v-text-field>
      <v-textarea v-model="descripcion" label="Descripción"></v-textarea>
      <v-text-field v-model="puntos" label="Puntos"></v-text-field>
      <v-btn color="primary" @click="agregarElemento">Confirmar</v-btn>
    
    </v-form>
    </div>
  </template>
  
  <script>
import productsList from '../service/productsList';
  export default {
    data() {
      return {
        nombre: '',
        descripcion: '',
        puntos: '',
      };
    },
     agregarElemento() {
      const elemento = {...this.elemento}
      try {
         productsList.agregarElemento(elemento)
      } catch (error) {
        alert(error)
        console.log(error);
      }
    },
  };
  </script>

<style>
.formulario{
    margin:20px;
}
</style>