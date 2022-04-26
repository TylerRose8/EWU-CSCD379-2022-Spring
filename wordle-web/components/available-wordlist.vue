<template>
  <v-card class="my-5 pa-5">
    <v-row v-for="(word, i) in wordleGame.viewHints" :key="i" no-gutters justify="center">
      <v-container class="text-center">
        <v-btn :disabled="wordleGame.gameOver" @click="setWord(word)"> {{ word }}</v-btn>
      </v-container>
    </v-row>
  </v-card>
</template>


<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {WordleGame} from '~/scripts/wordleGame'


@Component({components:{}})
export default class AvailableWordlist extends Vue {
  @Prop({required: true})
  wordleGame!: WordleGame

  setWord(char: string) {
    this.wordleGame.currentWord.clearWord()
    for (let i = 0; i < char.length; i++) {
      this.wordleGame.currentWord.addLetter(char[i])
    }
    this.wordleGame.hints = false;
  }
}

</script>
