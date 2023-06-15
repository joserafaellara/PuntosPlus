<template>
  <v-app>
    <v-content>
      <v-container fluid id="contenedor-info">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-card-text>
                <v-form @submit.prevent="logout">
                  <v-btn color="primary" block type="submit">Cerrar Sesión</v-btn>
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
import { useLoginStore } from "../stores/login";
export default {
  setup() {
  const store = useLoginStore();
  const { logout } = store;
  return { logout };
},
  methods: {
    logout() {
      this.logout()
      this.$router.push("/")
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

  #contenedor-info{
    position: relative;
    left:0;
    top:60px;
    max-width:80%;
    margin:left;
  }
</style>