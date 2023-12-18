<template>
    <v-form @submit.prevent="submit">
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="user.nombre" label="Nombre" prepend-icon="mdi-account" :rules="nombreRules"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="user.apellido" label="Apellido" prepend-icon="mdi-account" :rules="apellidoRules"></v-text-field>
        </v-col>
      </v-row>
      <v-text-field v-model="user.email" label="Email" prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
      <v-text-field v-model="user.dni" label="DNI" prepend-icon="mdi-account-card-details" :rules="dniRules"></v-text-field>
      <v-text-field v-model="user.telefono" label="Teléfono" prepend-icon="mdi-phone" :rules="telefonoRules"></v-text-field>
      <v-text-field v-model="user.password" label="Contraseña" type="password" prepend-icon="mdi-lock" :rules="passwordRules"></v-text-field>
      <v-text-field v-model="user.confirmPassword" label="Confirmar Contraseña" type="password" prepend-icon="mdi-lock" :rules="confirmPasswordRules"></v-text-field>
      <v-btn color="primary" block type="submit">Registrarse</v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    name: 'FormRegisterComponent',
    data() {
      return {
        user: {
          nombre: '',
          apellido: '',
          email: '',
          dni: '',
          telefono: '',
          password: '',
          confirmPassword: ''
        },
        // Reglas de validación (pueden ser propiedades computadas o importadas)
        nombreRules: [
          (value) => !!value || 'El nombre es requerido',
          (value) => /^[A-Za-z\s]+$/.test(value) || 'Ingrese un nombre válido'
        ],
        // ... Otras reglas ...
      };
    },
    methods: {
      submit() {
        this.$emit('register', this.user);
      }
    }
  };
  </script>
  
  <style scoped>
    /* Estilos específicos del FormRegisterComponent */
  </style>
  