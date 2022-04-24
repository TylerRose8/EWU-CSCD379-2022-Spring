<template>
  <v-container fluid fill-height justify-center>


    <v-card-text class="text-h1 font-weight-black text-center">
      Wordle
    </v-card-text>

    <v-alert v-if="wordleGame.gameOver" width="80%" :type="gameResult.type">
      {{ gameResult.text }}
      <v-btn class="ml-2" @click="resetGame"> Play Again?</v-btn>
    </v-alert>
    <v-row justify="center" align="center">
      <v-col cols="12" justify="center" align="center">
        <game-board :wordleGame="wordleGame"/>
      </v-col>
      <v-col cols="6">
        <keyboard :wordleGame="wordleGame"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {WordsService} from '~/scripts/wordsService'
import {GameState, WordleGame} from '~/scripts/wordleGame'
import KeyBoard from '@/components/keyboard.vue'
import GameBoard from '@/components/game-board.vue'
import {Word} from '~/scripts/word'

@Component({components: {KeyBoard, GameBoard}})
export default class Game extends Vue {
  word: string = WordsService.getRandomWord()
  wordleGame = new WordleGame(this.word)

  resetGame() {
    this.word = WordsService.getRandomWord()
    this.wordleGame = new WordleGame(this.word)
  }

  get gameResult() {
    if (this.wordleGame.state === GameState.Won) {
      return {type: 'success', text: 'Yay! You won!'}
    }
    if (this.wordleGame.state === GameState.Lost) {
      return {type: 'error', text: `You lost... :( The word was ${this.word}`}
    }
    return {type: '', text: ''}
  }

  getLetter(row: number, index: number) {
    const word: Word = this.wordleGame.words[row - 1]
    if (word !== undefined) {
      return word.letters[index - 1]?.char ?? ''
    }
    return ''
  }
}
</script>
