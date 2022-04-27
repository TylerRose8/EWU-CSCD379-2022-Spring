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
      <v-col cols="8">
        <keyboard :wordleGame="wordleGame" />
      </v-col>
    </v-row>
    <v-col cols="6">
      <AvailableWordlist v-show="wordleGame.hints" v-model="wordleGame.hints" :wordleGame="wordleGame"/>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {WordsService} from '~/scripts/wordsService'
import {GameState, WordleGame} from '~/scripts/wordleGame'
import KeyBoard from '@/components/keyboard.vue'
import GameBoard from '@/components/game-board.vue'
import AvailableWordList from '@/components/available-wordlist.vue'

@Component({components: {KeyBoard, GameBoard, AvailableWordList}})
export default class Game extends Vue {
  word: string = WordsService.getRandomWord()

  private availableWords: string[] = WordsService.getWords()

  wordleGame = new WordleGame(this.word, this)

  getAvailableWords():string[]{
    return this.availableWords
  }

  setAvailableWords(words : string[]){
    this.availableWords = words;
  }

  resetGame() {
    this.word = WordsService.getRandomWord()
    this.wordleGame = new WordleGame(this.word, this)
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

  // getLetter(row: number, index: number) {
  //   const word: Word = this.wordleGame.words[row - 1]
  //   if (word !== undefined) {
  //     return word.letters[index - 1]?.char ?? ''
  //   }
  //   return ''
  // }
}
</script>
