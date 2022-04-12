<template>
    <h1>
                ǝlpɹoM 
    </h1>
    <v-spacer/>
    <div>
        <div style="border:1px;width:100px;height:100px;">
        <div style="border:1px;width:100px;height:100px;">
        <div style="border:1px;width:100px;height:100px;">
        <div style="border:1px;width:100px;height:100px;">
        <div style="border:1px;width:100px;height:100px;">
    </div>
    <div>
        Text goes here!?
    </div>
    </v-spacer/>
    </v-spacer/>
    <div>
        Keyboard goes here!!!
    </div>
	<div>
		<h-card-actions>
			<h-spacer/>
			<h-btn color="primary" nuxt to="/"> Return Home </h-btn>
		</h-card-actions>
	</div>
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