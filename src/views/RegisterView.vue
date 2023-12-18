<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12" id="formulario">
              <v-card-title class="text-center">Registro de Usuario</v-card-title>
              <v-card-text>
                <form-register-component @register="handleRegister"></form-register-component>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar v-model="showSnackbar" :timeout="timeout" :color="snackbarColor" top right>
      Registro Exitoso
    </v-snackbar>
  </v-app>
</template>

<script>
import FormRegisterComponent from '@/components/FormRegisterComponent.vue';
import usersList from '../service/usersList';

export default {
  components: {
    FormRegisterComponent
  },
  data() {
    return {
      showSnackbar: false,
      timeout: 3000,
      snackbarColor: 'success'
    };
  },
  methods: {
    async handleRegister(user) {
      try {
        await usersList.agregarCliente(user);
        this.showSnackbar = true;
        this.$router.push('/');
      } catch (error) {
        alert(error);
      }
    },
    async buscarClienteXNombre(nombre) {
            
            try {
               this.cliente = await usersList.searchClienteXNombre(nombre);
               this.id = this.cliente.id
            }
            catch (error) {
                alert("cliente no encontrado");
            }
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
#formulario {
  position: relative;
  left: 0;
  top: 60px;
}
</style>
