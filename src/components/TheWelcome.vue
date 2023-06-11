<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Información de la Empresa</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
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
          <v-col cols="12">
            <v-card>
              <v-card-title>Nombre de la Empresa</v-card-title>
              <v-card-text>
                <p>Descripción de la empresa Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Dirección: Calle Principal 123, Ciudad</p>
                <p>Teléfono: 123-456-789</p>
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
      slides: [
        {
          id: 1,
          image: "https://via.placeholder.com/600x400?text=Slide+1",
          caption: "Imagen 1",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/600x400?text=Slide+2",
          caption: "Imagen 2",
        },
        {
          id: 3,
          image: "https://via.placeholder.com/600x400?text=Slide+3",
          caption: "Imagen 3",
        },
      ],
    };
  },
};
</script>

<style>
.slide-caption {
  position: absolute;
  bottom: 16px;
  left: 16px;
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