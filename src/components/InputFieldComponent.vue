<template>
    <v-text-field
      :value="modelValue"
      @input="$emit('update:modelValue', $event)"
      :label="label"
      :type="type"
    ></v-text-field>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: [String, Number],
        default: ''
      },
      label: String,
      type: {
        type: String,
        default: 'text' // Puede ser 'text', 'number', 'password', etc.
      }
    },
    emits: ['update:modelValue']
  };
  </script>
  