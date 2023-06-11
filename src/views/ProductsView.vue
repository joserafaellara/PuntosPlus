<template>
    <v-app>
      <v-content>
        <v-container id="contenedor-info">
            <v-btn style="margin:15px;" color="primary" @click="mostrarFormulario = !mostrarFormulario">{{mostarFormulario ? 'Cancelar' : 'Agregar'}}</v-btn>
            <div v-if="mostrarFormulario">
                <FormularioProducto ></FormularioProducto>   
            </div>
            
            
          <v-row>
            <v-col v-for="product in products" :key="product.id" cols="6" sm="4" md="3">
                <v-card>
                <v-img :src="product.avatar" height="200"></v-img>
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-subtitle>{{ product.points }}</v-card-subtitle>
                <v-card-text>{{ product.description }}</v-card-text>
                <v-btn @click="modificar(product.id)" class="btn-modificar" size="small">Modificar</v-btn>
                <v-btn @click="eliminar(product.id)" class="btn-eliminar" size="small">Eliminar</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </template>
  
  <script>
  import productsList from '../service/productsList';
 import FormularioProducto from '../components/FormularioProducto.vue';
  export default {
    data() {
        return {
            products: [],
            elemento: {},mostrarFormulario: false,
        };
    },
    mounted() {
        this.cargarProducts();
    },
    methods: {
        irAbout() {
            this.$router.push("/about");
        },
        async cargarProducts() {
            try {
                this.products = await productsList.cargarProducts();
            }
            catch (error) {
                alert("error de conexion");
            }
        },
        async eliminar(id) {
            try {
                await productsList.eliminarElemento(id);
                this.cargarProducts();
            }
            catch (error) {
                alert("error de conexion");
            }
        },
        async modificar(id) {
            const elemento = { ...this.elemento };
            try {
                await productsList.modificarElemento(id, elemento);
                this.cargarProducts();
            }
            catch (error) {
                alert("error de conexion");
            }
        },
    },
    components: { FormularioProducto }
  

    
}
  
  </script>
  
  <style>
    .btn-modificar{
    background-color:darkkhaki !important;
    margin: 10px;
    }

  .btn-eliminar{
    background-color: chocolate !important;
    }

  #contenedor-info{
  position: relative;
  left:10%;
  top:60px;
  max-width:80%;
  margin:left;
}
  </style>