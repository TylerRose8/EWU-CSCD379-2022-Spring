import { LetterStatus } from './letter'
import { Word } from './word'
import {AvailableWordService} from "~/scripts/availableWordService";

export enum GameState {
  Active = 0,
  Won = 1,
  Lost = 2,
}

export class WordleGame {
  private gameCtx: any;
  constructor(word: string, gameCtx: any) {
    this.words.push(new Word())
    this.word = word
    this.gameCtx = gameCtx
  }

  private word: string
  words: Word[] = []
  state: GameState = GameState.Active
  readonly maxGuesses = 6
  hints: boolean = false

  get viewHints(){
    return this.gameCtx.getAvailableWords()
  }

  showHints(show:boolean){
    this.hints = show
    if(this.hints){
      this.gameCtx.setAvailableWords(AvailableWordService.ValidWords(this.words[this.words.length-1].text))
    }
  }

  get currentWord(): Word {
    return this.words[this.words.length - 1]
  }

  get gameOver(): Boolean {
    return this.state === GameState.Won || this.state === GameState.Lost
  }

  get correctChars() {
    const allLetters = this.words.map((x) => x.letters).flat()
    return allLetters
      .filter((x) => x.status === LetterStatus.Correct)
      .map((x) => x.char)
  }

  get wrongPlaceChars() {
    const allLetters = this.words.map((x) => x.letters).flat()
    const wrongPlaceLetters = allLetters
      .filter((x) => x.status === LetterStatus.WrongPlace)
      .map((x) => x.char)
    return wrongPlaceLetters.filter((x) => !this.correctChars.includes(x))
  }

  get wrongChars() {
    const allLetters = this.words.map((x) => x.letters).flat()
    return allLetters
      .filter((x) => x.status === LetterStatus.Wrong)
      .map((x) => x.char)
  }

  submitWord() {
    if (this.currentWord.evaluateWord(this.word)) {
      this.state = GameState.Won
    } else if (this.words.length === this.maxGuesses) {
      this.state = GameState.Lost
    } else {
      this.words.push(new Word())
    }
  }
}
