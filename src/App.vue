<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title class="monster-font">Monster Chat</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-layout v-if="usuario" align-center justify-end>
        <v-avatar color="white">
          <v-img :src="usuario.foto"></v-img>
        </v-avatar>
        <span class="ml-3 monster-font">{{ usuario.nombre }}</span>
        <v-btn class="monster-font" text small @click="usuario = null">Salir</v-btn>
      </v-layout>
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height>
        <Login v-if="!usuario" @onNotificacion="mostrarNotificacion" @onIngresar="ingresar" />
        <chat v-else />
      </v-container>
    </v-main>

    <v-snackbar
      v-model="notificacion.visible"
      :color="notificacion.color"
      multi-line
      top
      :timeout="6000"
      dark
    >
      <span>{{ notificacion.mensaje }}</span>
      <v-btn class="ml-3" color="white" text @click="notificacion.visible = false">Cerrar</v-btn>
    </v-snackbar>

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
import Chat from "./components/Chat";

export default {
  name: "App",

  components: {
    Login,
    Chat
  },

  data: () => ({
    //
    usuario: null,
    notificacion: {
      mensaje: "",
      color: "info",
      visible: false
    }
  }),
  methods: {
    ingresar(usuario) {
      this.usuario = usuario;
    },
    mostrarNotificacion(notificacion) {
      this.notificacion.mensaje = notificacion.mensaje;
      this.notificacion.color = notificacion.color;
      this.notificacion.visible = true;
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
