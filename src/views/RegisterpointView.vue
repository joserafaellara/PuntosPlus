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
            <client-card-component :cliente="cliente"></client-card-component>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ClientCardComponent from '@/components/ClientCardComponent.vue';
import usersList from '../service/usersList';

export default {
  components: {
    ClientCardComponent
  },
  data() {
    return {
      dni: '',
      monto: '',
      dniRules: [
        (value) => !!value || 'El DNI es requerido',
        (value) => /^\d{7,9}$/.test(value) || 'Ingrese un DNI válido'
      ],
      montoRules: [
        (value) => !!value || 'El monto es requerido',
        (value) => Number(value) > 0 || 'Ingrese un monto válido'
      ],
      id: '',
      cliente: {}
    };
  },
  methods: {
    async registerMonto() {
      try {
        const cliente = await this.buscarCliente(this.dni);
        if (cliente) {
          const acu = Math.ceil(this.monto / 10);
          cliente.puntos += acu;
          await this.modificar(cliente.id, cliente);
          this.cliente = cliente;  // Actualiza el cliente en el estado
        } else {
          throw new Error('Cliente no encontrado');
        }

        // Limpiar los campos del formulario después del registro
        this.dni = '';
        this.monto = '';
      } catch (error) {
        alert("Error: " + error.message);
      }
    },
    async modificar(id, cliente) {
    try {
        await usersList.modificarCliente(id, cliente);
        
    } catch (error) {
        alert("Error al actualizar el cliente: " + error.message);
    }
  },
   async buscarCliente(dni) {
      try {
        return await usersList.searchCliente(dni);
      } catch (error) {
        throw new Error("Cliente no encontrado");
      }
    },
  }
};
</script>

<style scoped>
#contenedor-info {
  position: relative;
  left: 10%;
  top: 60px;
  max-width: 80%;
  margin: left;
}
.v-card {
  margin-bottom: 24px;
}
</style>
