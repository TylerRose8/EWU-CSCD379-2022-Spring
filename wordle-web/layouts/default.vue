<template>
  <v-app>
    <v-app-bar fixed app>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn color="primary" nuxt to="/" fab v-bind="attrs" v-on="on">
            <v-icon> mdi-alphabetical</v-icon>
          </v-btn>
        </template>
        <span> Go Home </span>
      </v-tooltip>
      <router-link to="/" class="text-h4 font-weight-black no-decoration">
        Wordle
      </router-link>
      <v-spacer />
      <settings-dialog />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SettingsDialog from '@/components/settings-dialog.vue'

@Component({ components: { SettingsDialog } })
export default class DefaultLayout extends Vue {}
</script>

<style>
.no-decoration {
  text-decoration: none;
}
</style>
