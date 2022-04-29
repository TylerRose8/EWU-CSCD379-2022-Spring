<template>
  <v-card width="450">
    <v-container class="container-gradient">
      <v-row v-for="row in wordleGame.maxGuesses" :key="row" dense>
        <v-col v-for="index in maxLetters" :key="index">
          <v-card height="50" :color="letterColor(getLetter(row, index))">
            <v-card-text class="text-center text-h6 font-weight-bold">
              {{ getChar(getLetter(row, index)) }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { WordleGame } from '~/scripts/wordleGame'
import { Word } from '~/scripts/word'
import { Letter } from '~/scripts/letter'

@Component({ components: {} })
export default class GameBoard extends Vue {
  @Prop({ required: true })
  wordleGame!: WordleGame

  maxLetters:number = Word.maxLetters

  getLetter(row: number, index: number): Letter | null {
    const word: Word = this.wordleGame.words[row - 1]
    if (word !== undefined) {
      return word.letters[index - 1] ?? null
    }
    return null
  }

  getChar(letter: Letter | null) {
    if (letter === null) return ''
    return letter.char
  }

  letterColor(letter: Letter | null): string {
    if (letter === null) return ''
    return letter.letterColor
  }
}
</script>

<style>
.container-gradient {
  background: linear-gradient(0deg, rgba(10,10,10,0.5) 0%, rgba(25,25,25,1) 50%, rgba(50,50,50,1) 100%);
}
</style>
