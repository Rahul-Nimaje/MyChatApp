<template>
  <v-app>
    <v-app-bar app color="primary" dark>
     
      <v-spacer></v-spacer>

   
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
        <v-snackbar
            v-for="(snackbar, i) in snackbars"
            :key="i"
            :color="snackbar.color"
            :top="snackbar.position === 'top'"
            :left="snackbar.position === 'left'"
            :bottom="snackbar.position === 'bottom'"
            :right="snackbar.position === 'right'"
            :timeout="snackbar.timeout"
            :vertical="snackbar.vertical === 'vertical'"
            v-model="snackbar.showing"
            :style="`top: ${(i + 1) * 52}px`"
            >{{ snackbar.text }}</v-snackbar
        >
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
   computed: {
        ...mapState(["snackbars"]),
    },
};
</script>
