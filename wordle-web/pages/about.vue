<template>
    <v-container fluid fill-height justify-center>
        <v-card-text class="text-h4 font-weight-black text-center">
            This is the simple About page text.
            With this project, we are creating Wordle as a class.
            You can play Wordle as much as you want on this amazing site!
            Also Meg is awesome!!
        </v-card-text>
        <v-btn color="primary" nuxt to="/game"> Back To Game Page </v-btn>
    </v-container>
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({components: {}})
export default class Game extends Vue {}
</script>
