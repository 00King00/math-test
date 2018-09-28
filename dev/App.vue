<template lang="pug">
	.training
		
		h1 Math training
		h2 LEVEL № {{level}}
		hr
		.progress
			.progress-bar( :style="progressStyle" )
		.box
			transition( name="flip" mode="out-in")
				AppStartScreen(v-if=" state == 'start' "
					@onStart="onStart"
					@onChooseLevel="onChooseLevel"
					:level="level"
				)
				AppQuestion(v-if=" state == 'question'"
							@success="onQuestionSuccess"
							@error="onQuestionError"
							:settings="levels[level]"
							
							
				)
				AppMasage(v-if=" state == 'masage' "
					:text='masage.text' :type='masage.type'
					@onNext="onNext"
				)
				AppResultScreen(v-if=" state == 'results' "
					:stats="stats"
					@repeat="onRepeat"
					@nextLevel="onNextLevel"
				)
		

</template>

<script>
export default {
	
data () {
    return {
		state: 'start',
		masage: {
			text: "",
			type:""
		},
		stats:{
			success: 0,
			error: 0
		},
		questMax: 3,
		level: 0,
		levels:[
			{
				min: 20,
				max: 40,
				range: 5,
				variants: 3
			},
			{
				min: 100,
				max: 200,
				range: 20,
				variants: 4
			},
			{
				min:400,
				max: 800,
				range:50,
				variants: 6
			}
		]
		
    }
},
	methods:{
		onStart(){
			this.state = 'question';
		},
		onQuestionSuccess(){
			this.state = 'masage';
			this.masage.text = 'Good job';
			this.masage.type = 'success';
			this.stats.success++;
			
		},
		onQuestionError(msg){
			this.state = 'masage';
			this.masage.text = msg;
			this.masage.type = 'warning';
			this.stats.error++;
		},
		onNext(){
			if(this.questDone  < this.questMax){
				this.state = 'question';
			} else{
				this.state = 'results';
			}
			
		},
		onRepeat(){
			this.stats.success = 0;
			this.stats.error = 0;
			this.state = 'start';
			
			
		},
		onNextLevel(){
			this.state = 'question';
			this.stats.success = 0;
			this.stats.error = 0;
			this.onChooseLevel();
		},
		onChooseLevel(){
			
			if( this.level >= this.maxLevel){
				this.level = 0;
			} else
			this.level++
		}
		
	},
	computed:{
		maxLevel(){
			return this.levels.length - 1;
		},
		questDone(){
			return this.stats.success + this.stats.error;
		},
		progressStyle(){
			return {
				width: ( this.questDone / this.questMax * 100) + '%'
			};
		}
	}
}
</script>

<style lang="scss">
	*{
		box-sizing: border-box;
	}
	.btn{
		margin: 100px 20px;
	}
.training {
	max-width: 900px;
	margin: 20px auto;
	padding: 100px 0;
}
.box{
	
}
.flip-{
	&enter{
		
	}
	&enter-active{
		animation: flipInX 0.8s linear;
	}
	&live{
		
	}
	&live-active{
		animation: flipOutX 0.8s linear;
	}
	@keyframes flipInX{
		from{transform: rotateX(90deg)}
		to{transform: rotateX(0deg)}
	}
	@keyframes flipOutX{
		from{transform: rotateX(0deg)}
		to{transform: rotateX(90deg)}
	}
}
</style>
