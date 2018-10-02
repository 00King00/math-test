<template lang="pug">
	.wrapper
		step-bar
		config-title
		form
			package-config(v-show=" state == 'package-config' ")
			config-shape(v-show=" state == 'config-shape' ")
			config-base(:mixinName="state")
			next-config(:btn_next="btnNext" :currentStep="currentStep" :class="choosen" @nextConfig="nextConfig" @prewConfig="prewConfig")

</template>

<script>
import StepBar from './components/step-bar.vue'
import ConfigTitle from './components/config-title.vue'
import PackageConfig from  './components/package-config.vue'
import NextConfig from './components/next-config.vue'
import ConfigShape from './components/config-shape.vue'
import ConfigBase from './components/config-base.vue'
	
export default {
	
data () {
	return {
		state: "package-config",
		choosen: true,
		allConfig:[
			{
				confname: 'package-config',
				choosen: true,
			},
			{
				confname: 'config-shape',
			 	choosen: true,
			},
			{
				confname:'facade',
				choosen: false,
			},
			{
				confname:'frame',
				choosen: false,
			},
			{
				confname:'furniture'
			},
			{
				confname:'complectation',
				choosen: false,
			},
			{
				confname:'decore',
				choosen: false,
			},
			{
				confname:'done',
				choosen: false,
			}],
			nextSteps:['Выбрать размер','Выбрать фасад','Выбрать корпус','Выбрать форнитуру','Выбрать наполнения', 'Выбрать декор','Завершить'],
		currentStep: 0
		
		
	}
},
methods:{
	nextConfig(){
		this.currentStep++;
		this.state = this.allConfig[this.currentStep].confname;
		console.log(this.state)
		console.log(this.allConfig[1])
	},
	prewConfig(){
		if(this.currentStep>0){
			this.currentStep--;
			this.state = this.allConfig[this.currentStep].confname;

		}
	}

},
computed:{
	btnNext(){
		//if(this.state=='package-config'){
		return this.nextSteps[this.currentStep];
	}
	
},
components:{
	StepBar,
	ConfigTitle,
	PackageConfig,
	NextConfig,
	ConfigShape,
	ConfigBase
}
}
</script>
