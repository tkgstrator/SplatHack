<template>
  <v-card color="grey lighten-4" flat tile>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap" rel="stylesheet" />
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>SplatHack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>For Enterprise</v-btn>

        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" text>チュートリアル</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Consulting and support</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Discord community</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
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
}

.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
</style>