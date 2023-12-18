<template>
    <v-col cols="8" sm="4" md="4">
      <v-card>
        <v-img :src="product.avatar" height="200"></v-img>
        <div v-if="!product.editing">
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.points }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
        </div>
        <div v-else>
            <!-- Formulario de edición -->
                <form-product-component
                  :product="product"
                  @save-edits="saveEdits"
                ></form-product-component>
        </div>
        <v-card-actions v-if="hasPermissions('admin')">
            <v-btn v-if="!product.editing" class="btn-modificar" @click="edit" size="small">Editar</v-btn>
          <v-btn class="btn-eliminar" @click="deleteProduct(product.id)" size="small">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </template>
  
  <script>
  import { ref, reactive } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useLoginStore } from '@/stores/login';
  import FormProductComponent from './FormProductComponent.vue';
  export default {
    components: {
      FormProductComponent
    },
    props: {
      product: Object
    },
    emits: ['edit-product', 'delete-product', 'save-edits'],
    setup(props, { emit }) {
        const loginStore = useLoginStore();
        const { hasPermissions } = storeToRefs(loginStore);
        const editedProduct = reactive({ ...props.product });

        const edit = () => {
        // Preparar el producto para la edición
        Object.assign(editedProduct, props.product);
        emit('edit-product', props.product);
        };

        const saveEdits = () => {
        // Emitir el evento con los datos editados
        emit('save-edits', editedProduct);
        };

        const deleteProduct = (id) => {
        emit('delete-product', id);
        };

    return { editedProduct, hasPermissions, edit, saveEdits, deleteProduct };
  }
};
</script>
<style>
  .btn-modificar{
    background-color:darkkhaki !important;
    position:relative;
    margin: 10px;
    }

  .btn-eliminar{
    background-color: chocolate !important;
    position: relative;
    margin: 10px;
    }

  .btn-guardar{
    position: relative;
    margin: 10px;
  }

  .formulario{
    margin:20px;
    }
  </style>
