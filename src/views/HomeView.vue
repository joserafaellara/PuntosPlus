<template>
  <v-app>
    <v-main>
      <v-container class="container-info">
        <v-row>
          <v-col cols="12">
            <h2 class="center">Información de la Empresa</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card id="slider">
              <v-carousel hide-delimiters>
                <v-carousel-item v-for="slide in slides" :key="slide.id">
                  <v-sheet height="300" style="width: 100%">
                    <v-img :src="slide.image" height="100%"></v-img>
                    <div class="slide-caption">{{ slide.caption }}</div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="position:relative">
            <v-card>
              <v-card-title>Tu App para canjear productos</v-card-title>
              <v-card-text>
                <p>Con cada compra que hagas sumas puntos que podes canjear por productos</p>
                <p>Realizado para mejorar las ventas y darle beneficios a los clientes</p>
                <p>Grupo 8 de PNT2</p>
                <p>Lara Jose, Taboada Noelia</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      slides: [
      {
          id: 1,
          image: "../images/logo.jfif",
          caption: "Imagen 2",
        },
        {
          id: 2,
          image: "https://us.123rf.com/450wm/gurza/gurza1902/gurza190200019/124846791-tienda-de-productos-org%C3%A1nicos-supermercado-ilustraci%C3%B3n-vectorial.jpg?ver=6",
          caption: "Imagen 1",
        },
     
      ],
    };
  },
};
</script>

<style>
.container-info{
  max-width: 90% !important;
  margin:auto !important;
}
.center {
  text-align: center;
}

.slide-caption {
  position: relative;
  bottom: 16px;
  right: 20%;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

@media (max-width: 600px) {
  .slide-caption {
    font-size: 14px;
  }
}
</style>