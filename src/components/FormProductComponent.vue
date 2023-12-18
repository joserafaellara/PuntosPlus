<template>
    <v-form @submit.prevent="submitForm">
      <input-field-component class="size" v-model="editedProduct.name" label="Nombre"></input-field-component>
      <input-field-component class="size" v-model="editedProduct.points" label="Puntos" type="number"></input-field-component>
      <input-field-component class="size" v-model="editedProduct.description" label="Descripción" type="textarea"></input-field-component>
      <v-btn class="btn-guardar" type="submit" color="primary" size="small">Guardar</v-btn>
    </v-form>
  </template>
  
  <script>
  import InputFieldComponent from './InputFieldComponent.vue';
  
  export default {
    components: {
      InputFieldComponent
    },
    props: {
      product: Object
    },
    data() {
      return {
        editedProduct: {...this.product}
      };
    },
    methods: {
      submitForm() {
        this.$emit('save-edits', this.editedProduct);
      }
    }
  };
  </script>

  <style>
  #contenedor-info{
    position: relative !important;
    padding:0px;
    margin:20px!important;
    }
  .size{
    max-width: 90%;
    margin:auto;
    }
  </style>
  