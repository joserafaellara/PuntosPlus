<template>
    <v-app >
      <v-content >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card class="elevation-12" id="formulario">
                <v-card-title class="text-center">Registro de Usuario</v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="register">
                    <v-row>
                      <v-col cols="6">
                        <v-text-field v-model="nombre" label="Nombre" prepend-icon="mdi-account" :rules="nombreRules"></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field v-model="apellido" label="Apellido" prepend-icon="mdi-account" :rules="apellidoRules"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
                    <v-text-field v-model="dni" label="DNI" prepend-icon="mdi-account-card-details" :rules="dniRules"></v-text-field>
                    <v-text-field v-model="telefono" label="Teléfono" prepend-icon="mdi-phone" :rules="telefonoRules"></v-text-field>
                    <v-text-field v-model="password" label="Contraseña" type="password" prepend-icon="mdi-lock" :rules="passwordRules"></v-text-field>
                    <v-text-field v-model="confirmPassword" label="Confirmar Contraseña" type="password" prepend-icon="mdi-lock" :rules="confirmPasswordRules"></v-text-field>
                    <v-btn color="primary" block type="submit">Registrarse</v-btn>
                  </v-form>
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
        nombre: '',
        apellido: '',
        email: '',
        dni: '',
        telefono: '',
        password: '',
        confirmPassword: '',
        nombreRules: [
          (value) => !!value || 'El nombre es requerido',
          (value) => /^[A-Za-z\s]+$/.test(value) || 'Ingrese un nombre válido'
        ],
        apellidoRules: [
          (value) => !!value || 'El apellido es requerido',
          (value) => /^[A-Za-z\s]+$/.test(value) || 'Ingrese un apellido válido'
        ],
        emailRules: [
          (value) => !!value || 'El email es requerido',
          (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || 'Ingrese un email válido'
        ],
        dniRules: [
          (value) => !!value || 'El DNI es requerido',
          (value) => /^\d{8}$/.test(value) || 'Ingrese un DNI válido'
        ],
        telefonoRules: [
          (value) => !!value || 'El teléfono es requerido',
          (value) => /^\d{7,10}$/.test(value) || 'Ingrese un teléfono válido'
        ],
        passwordRules: [
          (value) => !!value || 'La contraseña es requerida',
          (value) => value && value.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
        ],
        confirmPasswordRules: [
          (value) => !!value || 'Confirme la contraseña',
          (value) => value === this.password || 'Las contraseñas no coinciden'
        ]
      };
    },
    methods: {
      register() {
        // Lógica para registrar al usuario
        console.log('Registrando usuario:', {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          dni: this.dni,
          telefono: this.telefono,
          password: this.password
        });
      }
    }
  };
  </script>
  
  <style scoped>
    .v-card {
      border-radius: 8px;
      overflow: hidden;
    }
    .v-card-text {
      padding: 24px;
    }
    .v-btn {
      margin-top: 16px;
    }
    .text-center {
      text-align: center;
    }

    #formulario{
      position: relative;
      left:0;
      top:60px;
    }
  </style>