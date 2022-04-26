<template>
  <div>
    <v-btn icon @click="toggleDialog">
      <v-icon> mdi-hamburger</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="450">
      <v-card>
        <v-container>
          <v-card-title> Navigation</v-card-title>

          <v-card-text>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-list dark v-bind="attrs" v-on="on">
                  <v-list-item-group>
                    <v-list-item nuxt to="/" @click="toggleDialog">
                      <v-btn color="primary"> Home </v-btn>
                    </v-list-item>
                    <v-list-item nuxt to="/game" @click="toggleDialog">
                      <v-btn color="primary"> Game </v-btn>
                    </v-list-item>
                    <v-list-item nuxt to="/about" @click="toggleDialog">
                      <v-btn color="primary"> About </v-btn>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </template>
            </v-menu>
          </v-card-text>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({})
export default class SettingsDialog extends Vue {
  dialog = false
  private destination: string = "/";

  toggleDialog() {
    this.dialog = !this.dialog
  }

  goTo(destination:string){
    this.destination = destination
  }
}
</script>
