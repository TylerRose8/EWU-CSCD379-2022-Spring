<template>
  <v-card class="my-5 pa-5">
    <v-row v-for="(charRow, i) in chars" :key="i" no-gutters justify="center">
      <v-col v-for="char in charRow" :key="char" cols="1">
        <v-container class="text-center">
          <v-btn
            class="gradient-blue"
            :color="letterColor(char)"
            :disabled="wordleGame.gameOver"
            @mouseover="letterColor('hover')"
            @click="setLetter(char)"
          >
            {{ char }}
          </v-btn>
        </v-container>
      </v-col>
    </v-row>
    <v-btn
      :disabled="wordleGame.gameOver"
      class="float-left"
      @click="guessWord"
    >
      Guess
    </v-btn>
    <v-btn
      :disabled="wordleGame.gameOver"
      icon
      class="float-right"
      @click="removeLetter"
    >
      <v-icon>mdi-backspace</v-icon>
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {Letter, LetterStatus} from '~/scripts/letter'
import {WordleGame} from '~/scripts/wordleGame'
import {AvailableWordService} from "~/scripts/availableWordService";

@Component
export default class KeyBoard extends Vue {
  @Prop({required: true})
  wordleGame!: WordleGame

  chars = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '?'],
  ]

  setLetter(char: string) {
    this.wordleGame.currentWord.addLetter(char)
  }

  removeLetter() {
    this.wordleGame.currentWord.removeLetter()
  }

  guessWord() {
    if(this.wordleGame.currentWord.text.includes('?')) {
      // log a message to console
      // eslint-disable-next-line no-console
      // this.wordleGame.availableWords = AvailableWordService.UpdatePossibleWordList(this.wordleGame.currentWord.text)
      this.wordleGame.showHints(true)
    }
    else if (this.wordleGame.currentWord.length === this.wordleGame.currentWord.maxLetters ){
      this.wordleGame.submitWord()
    }
  }

  letterColor(char: string): string {
    if (this.wordleGame.correctChars.includes(char)) {
      return Letter.getColorCode(LetterStatus.Correct)
    }
    if (this.wordleGame.wrongPlaceChars.includes(char)) {
      return Letter.getColorCode(LetterStatus.WrongPlace)
    }
    if (this.wordleGame.wrongChars.includes(char)) {
      return Letter.getColorCode(LetterStatus.Wrong)
    }
    if (char === "hover") {
      return Letter.getColorCode(LetterStatus.Hover)
    }

    return Letter.getColorCode(LetterStatus.Unknown)
  }
}
</script>

<style>
.gradient-blue {
  background: linear-gradient(0deg, rgba(0, 83, 185, 0.5) 0%, rgba(15, 108, 200, 0.5) 25%, rgba(25, 118, 210, 1) 100%);
}
</style>
