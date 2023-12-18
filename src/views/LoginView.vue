<template>
  <div class="login-view">
    <form-login-component @login="handleLogin"></form-login-component>
  </div>
</template>

<script>
import FormLoginComponent from '@/components/FormLoginComponent.vue';
import usersList from "@/service/usersList.js"; 
import { useLoginStore } from "@/stores/login";

export default {
  components: {
    FormLoginComponent
  },
  methods: {
    async handleLogin(usuario) {
      try {
        const cliente = await usersList.searchClienteXMail(usuario.mail);
        if (!cliente || usuario.password !== cliente.password) {
          throw new Error('Credenciales erróneas');
        }

        const store = useLoginStore();
        const permissions = usuario.mail === "admin@test.com" ? ['admin'] : [];
        store.login({ mail: usuario.mail, permissions });

        this.$router.push("/");
        this.$router.push("/");

      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style>
/* Aquí tus estilos */
</style>
