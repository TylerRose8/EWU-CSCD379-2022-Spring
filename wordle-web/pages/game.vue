<template>
	<div>
	<v-container class="grey lighten-5">
    <v-row
      v-for="n in 2"
      :key="n"
      :class="n === 1 ? 'mb-6' : ''"
      no-gutters
    >
      <v-col
        v-for="k in n + 1"
        :key="k"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ k }} of {{ n + 1 }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
		<h-row justify="center" align="center">
			<h1>
				ǝlpɹoM
			</h1>
			<br/>
			<div>
				<v-row justify="center" align="center">
					<span style="border:1px;width:100px;height:100px;background-color:grey;">
					X
					</span>
					<span style="border:1px;width:100px;height:100px;background-color:grey;">
					X
					</span>
					<span style="border:1px;width:100px;height:100px;background-color:grey;">
					X
					</span>
					<span style="border:1px;width:100px;height:100px;background-color:grey;">
					X
					</span>
					<span style="border:1px;width:100px;height:100px;background-color:grey;">
					X
					</span>
				</v-row>
			</div>
			<br/>
			<div>
				Text goes here!?
			</div>
			<br/>
			<br/>
			<div>
				Keyboard goes here!!!
			</div>
		</h-row>
		<div>
			<br/>
			<v-btn color="primary" nuxt to="/"> Return Home </v-btn>
		</div>
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