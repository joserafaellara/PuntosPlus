<template>
  <v-app>
    <v-main>
      <v-container id="contenedor-info">
        <v-btn v-if="hasPermissions('admin')" style="margin:15px;" color="primary" @click="mostrarFormulario = !mostrarFormulario">
          {{ mostrarFormulario ? 'Cancelar' : 'Agregar' }}
        </v-btn>
        
        <div v-if="mostrarFormulario">
          <v-form class="formulario">
            <v-text-field v-model="elemento.name" label="Nombre"></v-text-field>
            <v-textarea v-model="elemento.description" label="Descripcion"></v-textarea>
            <v-text-field v-model="elemento.points" label="Puntos"></v-text-field>
            <v-btn color="primary" @click="agregarElemento">Confirmar</v-btn>
          </v-form>
        </div>

        <product-list-component
          :products="products"
          @edit-product="toggleEditing"
          @delete-product="eliminar"
          @save-edits="saveProductEdits"
        ></product-list-component>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProductListComponent from '@/components/ProductListComponent.vue';
import productsList from '@/service/productsList.js'; 
import { storeToRefs } from "pinia";
import { useLoginStore } from "@/stores/login";

export default {
  components: {
    'product-list-component': ProductListComponent
  },
  data() {
    return {
      products: [],
      elemento: {},
      mostrarFormulario: false,
      editFormulario: false,
    };
  },
  mounted() {
    this.cargarProducts();
  },
  methods: {
    async cargarProducts() {
      try {
        const response = await productsList.cargarProducts();
        this.products = response.map(product => ({ ...product, editing: false }));
      } catch (error) {
        alert("Error de conexión: " + error);
      }
    },
    async agregarElemento() {
      try {
        await productsList.agregarElemento(this.elemento);
        this.mostrarFormulario = false;
        this.elemento = {}; // Limpiar el formulario
        await this.cargarProducts(); // Recargar la lista de productos
      } catch (error) {
        alert("Error al agregar producto: " + error);
      }
    },
      async saveProductEdits(editedProduct) {
      try {
        console.log(editedProduct);
        await productsList.modificarElemento(editedProduct.id, editedProduct);
        this.cargarProducts();
      } catch (error) {
        alert("Error al guardar los cambios: " + error);
      }
    },
    async eliminar(id) {
      try {
        await productsList.eliminarElemento(id);
        await this.cargarProducts(); // Recargar la lista de productos
      } catch (error) {
        alert("Error al eliminar producto: " + error);
      }
    },
    toggleEditing(product) {
      this.products = this.products.map(p => 
        p.id === product.id ? { ...p, editing: !p.editing } : p
      );
    },
    
  },
  setup() {
    const store = useLoginStore();
    const { user } = storeToRefs(store);
    const hasPermissions = store.hasPermissions; // Accediendo al getter

    return { user, hasPermissions };
  }
};
</script>

<style>
.formulario {
  margin: 20px;
}
#contenedor-info {
  position: relative;
  left: 10%;
  max-width: 80%;
  margin: left;
}
</style>
