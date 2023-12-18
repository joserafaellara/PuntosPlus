<template>
    <v-row>
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @edit-product="editProduct"
        @delete-product="deleteProduct"
        @save-edits="saveProductEdits"
      ></product-card>
    </v-row>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    components: {
      ProductCard
    },
    props: {
      products: Array
    },
    methods: {
      editProduct(product) {
        this.$emit('edit-product', product);
      },
      deleteProduct(id) {
        this.$emit('delete-product', id);
      },
      saveProductEdits(editedProduct) {
    this.$emit('save-edits', editedProduct);
  }
    }
  };
  </script>
  