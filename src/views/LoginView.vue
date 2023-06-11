<template>
    <v-app>
      <v-content>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card class="elevation-12">
                <v-img src="./assets/login-background.jpg" aspect-ratio="1.5"></v-img>
                <v-card-text>
                  <v-form @submit.prevent="login">
                    <v-text-field v-model="username" label="Usuario" prepend-icon="mdi-account"></v-text-field>
                    <v-text-field v-model="password" label="Contraseña" type="password" prepend-icon="mdi-lock"></v-text-field>
                    <v-btn color="primary" block type="submit">Iniciar Sesión</v-btn>
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
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Lógica para verificar las credenciales y realizar el inicio de sesión
        console.log('Iniciando sesión con usuario:', this.username, 'y contraseña:', this.password);
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
  </style>