<template>
    <v-list>
      <user-card-component 
        v-for="user in users"
        :key="user.id"
        :user="user"
      ></user-card-component>
    </v-list>
  </template>
  
  <script>
  import UserCardComponent from './UserCardComponent.vue';
  
  export default {
    components: {
      UserCardComponent
    },
    props: {
      users: Array
    }
  };
  </script>
  
  <style>

  </style>