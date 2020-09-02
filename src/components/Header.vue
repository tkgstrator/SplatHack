<template>
  <v-card color="grey lighten-4" flat tile>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap" rel="stylesheet" />
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title width="100px">SplatHack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs right show-arrows="true">
        <v-tab>
          <router-link to="/">HOME</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/install">INSTALL</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/tutorials">TUTORIAL</router-link>
        </v-tab>
        <!-- <v-tab></v-tab> -->
      </v-tabs>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>


<style>
.v-card {
  font-family: "M PLUS 1p";
  margin-bottom: 50px;
}

.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
}

.v-application a {
  text-decoration: none;
}
</style>