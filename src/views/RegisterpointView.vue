<template>
  <v-app>
    <v-content>
      <v-container fluid id="contenedor-info">
        <v-row v-if="showMenuOption">
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
                    <p>Monto total: {{ montoTotal }}</p>
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
  export default {
    data() {
      return {
        dni: '',
        monto: '',
        dniRules: [
          (value) => !!value || 'El DNI es requerido',
          (value) => /^\d{7}$/.test(value) || 'Ingrese un DNI válido'
        ],
        montoRules: [
          (value) => !!value || 'El monto es requerido',
          (value) => Number(value) > 0 || 'Ingrese un monto válido'
        ],
        cliente: null
      };
    },
    computed: {
      montoTotal() {
        return this.cliente ? this.cliente.monto + Number(this.monto) : 0;
      }
    },
    methods: {
      registerMonto() {
        // Lógica para registrar el monto
        // Aquí puedes realizar una solicitud a una API para guardar los datos
        this.cliente = {
          dni: this.dni,
          monto: Number(this.monto)
        };
  
        // Limpiar los campos del formulario después del registro
        this.dni = '';
        this.monto = '';
      }
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