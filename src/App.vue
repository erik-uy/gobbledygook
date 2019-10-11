<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Gobbledygook</span> &nbsp;
        <span class="font-weight-light d-none d-md-inline">)*@&#(*^???!</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2 d-none d-md-flex">Alpha</span>

    <div id="nav" class=" d-none d-md-flex">
      <router-link to="/en">Encrypt</router-link> |
      <router-link to="/de">Decrypt</router-link>
    </div>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
