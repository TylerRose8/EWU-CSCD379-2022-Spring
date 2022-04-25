<template :hidden="wordleGame.showHints">
  <v-card class="my-5 pa-5">
    <v-row v-for="(word, i) in possibleWordList" :key="i" no-gutters justify="center">
      <v-container class="text-center">
        <v-btn :disabled="wordleGame.gameOver" @click="setWord(word)"> {{ word }}</v-btn>
      </v-container>
    </v-row>
  </v-card>
</template>


<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {WordsService} from '~/scripts/wordsService'
import {WordleGame} from '~/scripts/wordleGame'

@Component
export default class AvailableWordlist extends Vue {
  @Prop({required: true})
  wordleGame!: WordleGame

  words = WordsService.getWords()
  currentWordPattern = this.wordleGame.currentWord.text.replace('?', '*')

  get possibleWordList() {
    return this.words.filter(word => word.match(this.currentWordPattern))
  }

  setWord(char: string) {
    this.wordleGame.currentWord.clearWord()
    for (let i = 0; i < char.length; i++) {
      this.wordleGame.currentWord.addLetter(char[i])
    }
  }
}
</script>
