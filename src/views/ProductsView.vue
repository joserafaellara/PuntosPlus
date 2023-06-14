<script>
  import productsList from '../service/productsList'
  export default {
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
        toggleEditing(product) {
            product.editing = !product.editing;
            product.newName = product.name,
            product.newPoints = product.points,
            product.newDescription = product.description}
            ,
      saveChanges(product) {
        
      // Realizar una solicitud PUT o PATCH a la API para guardar los cambios en el objeto correspondiente
      // Actualizar this.items con los datos recibidos de la API
      product.description = product.newDescription;
      product.name = product.newName,
      product.points =product.newPoints,
      product.editing = false;
      this.modificar(product.id, product)
    },
        async modificar(id, elemento) {
            
            try {
                await productsList.modificarElemento(id, elemento);
                this.cargarProducts();
            }
            catch (error) {
                alert("error de conexion");
            }
        },
        async agregarElemento() {
      const elemento = {...this.elemento}
      try {
        await productsList.agregarElemento(elemento)
        this.cargarProducts()
        this.elemento = {}
      } catch (error) {
        alert(error)
        console.log(error);
      }
    },

    }  
}
  
  </script>

<template>
    <v-app>
      <v-content>
        <v-container id="contenedor-info">
            <v-btn style="margin:15px;" color="primary" @click="mostrarFormulario = !mostrarFormulario">{{mostarFormulario ? 'Cancelar' : 'Agregar'}}</v-btn>
            <div v-if="mostrarFormulario">
                <v-form class="formulario">
      <v-text-field v-model="elemento.name" label="Nombre" ></v-text-field>
      <v-textarea v-model="elemento.description" label="Descripcion" ></v-textarea>
      <v-text-field v-model="elemento.points" label="Puntos" ></v-text-field>
      <v-btn color="primary" @click="agregarElemento">Confirmar</v-btn>
    
    </v-form>
            </div>
            
            
          <v-row>
            <v-col v-for="product in products" :key="product.id" cols="6" sm="4" md="3">
                <v-card>
                <v-img :src="product.avatar" height="200"></v-img>
                <div v-if="!product.editing">
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-subtitle>{{ product.points }}</v-card-subtitle>
                <v-card-text>
                    {{ product.description }}</v-card-text></div>
                <div v-else>
                    <v-card-text>
              <v-form @submit.prevent="saveChanges(product)">
                <v-text-field v-model="product.newName" label="Nombre" outlined></v-text-field>
                <v-text-field v-model="product.newPoints" label="Puntos" outlined></v-text-field>
                <v-text-field v-model="product.newDescription" label="Descripcion" outlined></v-text-field>
                <v-btn type="submit" color="primary">Guardar</v-btn>
              </v-form>
            </v-card-text>
            </div>
       
              <v-card-actions>
                <v-btn v-if="!product.editing" @click="toggleEditing(product)" class="btn-modificar" size="small">Editar</v-btn>
                <v-btn @click="eliminar(product.id)" class="btn-eliminar" size="small">Eliminar</v-btn>
              </v-card-actions>
              
            </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </template>
  
  
  
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

  #contenedor-info{
  position: relative;
  left:10%;
  top:60px;
  max-width:80%;
  margin:left;
}
.formulario{
    margin:20px;
}
  </style>