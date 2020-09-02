<template>
  <v-toolbar-items>
    <v-btn text>For Enterprise</v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" text>Support</v-btn>
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
</template>