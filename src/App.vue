<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title class="monster-font">Monster Chat</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-layout v-if="usuario">
        <v-avatar>
          <v-img :src="usuario.foto"></v-img>
        </v-avatar>
        <span>{{ usuario.nombre }}</span>
      </v-layout>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <Login @onIngresar="ingresar" />
      </v-container>
    </v-content>

    <v-footer color="primary" dark>
      <v-layout justify-center>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>German De Luca</strong>
        </v-card-text>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",

  components: {
    Login
  },

  data: () => ({
    //
    usuario: null
  }),
  methods: {
    ingresar(usuario) {
      this.usuario = usuario;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");

.monster-font {
  font-family: "Gloria Hallelujah", cursive;
}
</style>
