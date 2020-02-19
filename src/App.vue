<template>
  <v-app>
    <app-top-bar/>
    <v-content>
      <v-container fluid>
        <game-board/>
      </v-container>
    </v-content>

    <v-footer app>
      Copyleft 2000 Skaman Sam Tyler
    </v-footer>
  </v-app>
</template>

<script>
import { GameBoard, AppTopBar } from '@/components';
// import GameBoard from '@/components/GameBoard';
// import AppTopBar from '@/components/AppTopBar';

export default {
  name: 'App',

  components: {
    GameBoard,
    AppTopBar,
  },

  data: () => ({
    //
  }),
};
</script>
