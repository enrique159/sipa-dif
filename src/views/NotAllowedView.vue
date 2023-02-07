<template>
  <div class="not-allowed-view">
    <v-container class="text-center">
      <img class="mb-4" src="@/assets/img/not_allowed.svg" alt="Not Allowed" style="width: 256px;">
      <h3>No tienes permisos para entrar en este sitio</h3>
      <p class="tc-text-light">Se requiere de un usuario de tipo Administrador</p>
      <v-btn class="tc-primary" depressed rounded @click="goBack()">
        <v-icon>mdi-undo</v-icon>
        Regresar al inicio
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "NotAllowedView",
    metaInfo: { title: "Not Allowed" },
    methods: {
      goBack() {
        this.$router.push("/");
      }
    }
  }
</script>

<style lang="scss" scoped>
.not-allowed-view {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>