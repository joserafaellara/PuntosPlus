import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles'; // Importación global de estilos
import { createVuetify } from 'vuetify'; // Importa la función de creación
import * as components from 'vuetify/components'; // Importa los componentes de Vuetify
import * as directives from 'vuetify/directives'; // Importa las directivas de Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Iconos de Material Design Icons

const vuetify = createVuetify({ // Crea una instancia de Vuetify
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify); // Usa Vuetify
app.use(createPinia()); // Usa Pinia
app.use(router); // Usa Vue Router
app.mount('#app'); // Monta la aplicación
