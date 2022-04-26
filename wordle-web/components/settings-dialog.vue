<template>
  <div>
    <v-btn icon @click="toggleDialog">
      <v-icon> mdi-hamburger</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="450">
      <v-card>
        <v-container>
          <v-card-title> Settings</v-card-title>

          <v-card-text>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Pick Theme
                </v-btn>
              </template>
              <v-list>
                <v-list-item-group>
                  <v-list-item @click="turnOnTheLights">
                    <v-list-item-title> Light Mode</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="turnOffTheLights">
                    <v-list-item-title> Dark Mode</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>

            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Pick A Color
                </v-btn>
              </template>
              <v-list>
                <v-list-item-group>
                  <v-list-item @click="defaultTheme">
                    <v-list-item-title> Default</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="purpleTheme">
                    <v-list-item-title> Purple</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="greenTheme">
                    <v-list-item-title> Green</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="orangeTheme">
                    <v-list-item-title> Orange</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-card-text>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {colors} from 'vuetify/lib'

@Component({})
export default class SettingsDialog extends Vue {
  dialog = false

  toggleDialog() {
    this.dialog = !this.dialog
  }

  turnOnTheLights() {
    this.$vuetify.theme.dark = false
  }

  turnOffTheLights() {
    this.$vuetify.theme.dark = true
  }

  defaultTheme() {
    const darkTheme = {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    const lightTheme = {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    this.$vuetify.theme.themes.dark = darkTheme
    this.$vuetify.theme.themes.light = lightTheme
  }

  purpleTheme() {
    const darkTheme = {
      primary: colors.deepPurple,
      accent: colors.purple.accent3,
      secondary: colors.purple,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    const lightTheme = {
      primary: colors.purple,
      accent: colors.purple.accent3,
      secondary: colors.pink,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    this.$vuetify.theme.themes.dark = darkTheme
    this.$vuetify.theme.themes.light = lightTheme
  }

  greenTheme() {
    const darkTheme = {
      primary: colors.green.darken4,
      accent: colors.grey.darken3,
      secondary: colors.green.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    const lightTheme = {
      primary: colors.green.darken2,
      accent: colors.grey.darken3,
      secondary: colors.green,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    this.$vuetify.theme.themes.dark = darkTheme
    this.$vuetify.theme.themes.light = lightTheme
  }

  orangeTheme() {
    const darkTheme = {
      primary: colors.orange.darken2,
      accent: colors.grey.darken3,
      secondary: colors.orange.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    const lightTheme = {
      primary: colors.orange.darken3,
      accent: colors.grey.darken3,
      secondary: colors.orange.darken2,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }

    this.$vuetify.theme.themes.dark = darkTheme
    this.$vuetify.theme.themes.light = lightTheme
  }
}
</script>
