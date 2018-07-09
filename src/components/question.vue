<template lang="pug">

	.alert.alert-secondary
		h3 {{x}} + {{y}}
		//h3 {{settings.min}} {{settings.max}} {{settings.variants}} {{settings.max}} {{settings.range}}
		hr
		.buttons
			button.btn.btn-success(v-for="number in answers" @click='onAnswers(number)') {{ number }}
</template>

<script>

export default {
	
	props: ['settings'],
	data () {
		return {
			x: getRend(this.settings.min, this.settings.max),
			y: getRend(this.settings.min, this.settings.max),
		}
	},
	methods:{
		onAnswers(num){
			if (this.goodAnswer == num ){
				this.$emit('success');
			} else {
				this.$emit('error', ` Opps it's wrong ${this.x} + ${this.y} = ${this.goodAnswer}`);
			
			}
		}
	},
	computed: {
		goodAnswer(){
			return this.x + this.y;
		},
		answers(){
			let arr = [this.goodAnswer];
			let delta = this.settings.range;
			while(arr.length < this.settings.variants){
				let num = getRend(this.goodAnswer - delta, this.goodAnswer + delta);
				if (arr.indexOf(num) === -1) {arr.push(num);}
				
			}
			
			return arr.sort(function(a,b){
				return a - b;
			});
		}
	}
	
}
	

function getRend(min, max){
	 return Math.floor(Math.random() * (max - min)) + min;
}
</script>

<style lang="scss" scoped>
	.alert{
		background-color: #eee;
		padding-top: 20px;
	}
	.buttons{
		display: flex;
		justify-content: space-around;
	}

</style>