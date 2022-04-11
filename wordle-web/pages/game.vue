<template>
    <v-row justify="center" align="center">
        <v-col>
            <h1>
                ǝlpɹoM
            </h1>
        </v-col>
        <v-col cols="5" sm="8" md="6">
            <h-card style="width:100px;height:100px">
                X
            </h-card>
            <h-card style="width:100px;height:100px">
                X
            </h-card>
            <h-card style="width:100px;height:100px">
                X
            </h-card>
            <h-card style="width:100px;height:100px">
                X
            </h-card>
            <h-card style="width:100px;height:100px">
                X
            </h-card>
        </v-col>
        <v-card-text>
            Text goes here!?
        </v-card-text>
        <v-card>
            Keyboard goes here!!!
        </v-card>
        <v-card-actions>
        <v-spacer/>
        <v-btn color="primary" nuxt to="/index"> Return Home </v-btn>
        </v-card-actions>
    </v-row>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class IndexPage extends Vue{
    name: string = 'IndexPage';
    buttonText: string = 'Inspire me!';
    isLoading: boolean = false;

    changeButtonText() {
        this.buttonText = this.buttonText === 'Inspire me!' ? 'Inspire me again!' : 'Inspire me!';
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}
</script>