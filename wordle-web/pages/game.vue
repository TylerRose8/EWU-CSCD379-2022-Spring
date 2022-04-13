<template>
  <v-card style="padding: 5%; margine: 5%">
    <h-row justify="center" align="center">
      <h1>ǝlpɹoM</h1>
      <br />
      <v-row justify="center" align="center">
        <v-col
          style="
            border: 1px;
            width: 100px;
            height: 100px;
            background-color: grey;
          "
        >
          X
        </v-col>
        <v-col
          style="
            border: 1px;
            width: 100px;
            height: 100px;
            background-color: grey;
          "
        >
          X
        </v-col>
        <v-col
          style="
            border: 1px;
            width: 100px;
            height: 100px;
            background-color: grey;
          "
        >
          X
        </v-col>
        <v-col
          style="
            border: 1px;
            width: 100px;
            height: 100px;
            background-color: grey;
          "
        >
          X
        </v-col>
        <v-col
          style="
            border: 1px;
            width: 100px;
            height: 100px;
            background-color: grey;
          "
        >
          X
        </v-col>
      </v-row>
      <br />
      <v-row>Text goes here!?</v-row>
      <br />
      <br />
      <v-row>Keyboard goes here!!!</v-row>
    </h-row>
    <div>
      <br />
      <v-btn color="primary" nuxt to="/"> Return Home </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class IndexPage extends Vue {
  name: string = 'IndexPage'
  buttonText: string = 'Inspire me!'
  isLoading: boolean = false

  changeButtonText() {
    this.buttonText =
      this.buttonText === 'Inspire me!' ? 'Inspire me again!' : 'Inspire me!'
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>