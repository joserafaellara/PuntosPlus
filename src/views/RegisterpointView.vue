<template>
    <v-app>
      <v-content>
        <v-container fluid id="contenedor-info">
          <v-row>
            <!-- Primera sección - Registro de monto -->
            <v-col cols="6">
              <v-card class="elevation-12">
                <v-card-title>Registro de Monto</v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="registerMonto">
                    <v-text-field v-model="dni" label="DNI" :rules="dniRules"></v-text-field>
                    <v-text-field v-model="monto" label="Monto" type="number" :rules="montoRules"></v-text-field>
                    <v-btn color="primary" block type="submit">Registrar Monto</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
  
            <!-- Segunda sección - Información del cliente -->
            <v-col cols="6">
              <v-card class="elevation-12">
                <v-card-title>Cliente:</v-card-title>
                <v-card-text>
                  <div v-if="cliente">
                    <p>Nombre: {{ cliente.nombre }}</p>
                    <p>Apellido: {{ cliente.apellido }}</p>
                    <p>Puntos total: {{ cliente.puntos }}</p>
                    <p>ID: {{ this.id }}</p>
                  </div>
                  <div v-else>
                    <p>No se ha registrado un cliente aún.</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </template>
  
  <script>
  import usersList from '../service/usersList'
  export default {
    data() {
      return {
        dni: '',
        monto: '',
        dniRules: [
          (value) => !!value || 'El DNI es requerido',
          (value) => /^\d{2}$/.test(value) || 'Ingrese un DNI válido'
        ],
        montoRules: [
          (value) => !!value || 'El monto es requerido',
          (value) => Number(value) > 0 || 'Ingrese un monto válido'
        ],
        id : '',
        users: [],
        cliente: {},

      };
    },
    methods: {
        registerMonto() {
 
        this.cliente =  this.buscarCliente(this.dni) 
        const acu = Math.ceil(this.monto / 10)
        this.cliente.puntos = acu,
          this.modificar(this.id, this.cliente)
        
        // Limpiar los campos del formulario después del registro
        this.dni = '';
        this.monto = '';
      },
        async modificar(id, cliente) {
            
            try {
              
                await usersList.modificarCliente(id, cliente);
            }
            catch (error) {
                alert("falle aca");
            }
        },
        async buscarCliente(dni) {
            
            try {
               this.cliente = await usersList.searchCliente(dni);
               this.id = this.cliente.id
            }
            catch (error) {
                alert("cliente no encontrado");
            }
        },
    }
  };
  </script>
  
  <style scoped>
  #contenedor-info{
  position: relative;
  left:10%;
  top:60px;
  max-width:80%;
  margin:left;
}
  .v-card {
    margin-bottom: 24px;
  }
  </style>