<template>
    <v-app>
      <v-content>
        <v-container fluid id="contenedor-info">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card class="elevation-12">
                <v-card-text>
                  <v-form @submit.prevent="login">
                    <v-text-field v-model="usuario.mail" label="Mail" prepend-icon="mdi-account"></v-text-field>
                    <v-text-field v-model="usuario.password" label="Contraseña" type="password" prepend-icon="mdi-lock"></v-text-field>
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
  import { useLoginStore } from '../stores/login';

  export default {
    setup() {
    const store = useLoginStore();
    const { login } = store
    return { login }
  },
    data() {
      return { usuario:
        {
        mail: '',
        password: ''
        }
      };
    },
    methods: {
      
      login() {
      // consultar api por usuario
      // por hoy hardcodeamos
      if(this.usuario.mail=="usuario@test.com" && this.usuario.password=="123456") {
        this.login({mail:this.usuario.mail})
        this.$router.push("/")
      } else if(this.usuario.mail=="admin@test.com" && this.usuario.password=="123456") {
        this.login({mail:this.usuario.mail})
        this.$router.push("/")
      } else {
        alert('Credenciales erroneas')
      }
    }
      },
    
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

    #contenedor-info{
      position: relative;
      left:0;
      top:60px;
      max-width:80%;
      margin:left;
    }
  </style>