<template>
    <h-row justify="center" align="center">
        <h-card-title class="headline">
                ǝlpɹoM
        </h-card-title>
        <h-spacer/>
        <h-card>
            <h-col cols="5" sm="8" md="6">
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
            </h-col>
        </h-card>
        <h-card>
        <h-card-text>
            Text goes here!?
        </h-card-text>
        </h-card>
        <h-card>
            Keyboard goes here!!!
        </h-card>
        <h-card-actions>
        <h-spacer/>
        <h-btn color="primary" nuxt to="/"> Return Home </h-btn>
        </h-card-actions>
    </h-row>
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