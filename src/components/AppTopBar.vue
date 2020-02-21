<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <h2>Easy Incremental: ${{total | withUnits}}</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      @click.prevent="showAbout = !showAbout"
      text
    >
      <span class="mr-2">About</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'app-top-bar',
  props: ['total'],
  data: () => (
    {
      showAbout: false,
    }
  ),
};
</script>

<style lang="sass">
  //
</style>
