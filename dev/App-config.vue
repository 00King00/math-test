<template lang="pug">
	.wrapper
		step-bar
		config-title
		form
			package-config(v-show=" state == 'package-config' ")
			config-shape

			next-config(:btn_next="btnNext" @nextConfig="nextConfig")

</template>

<script>
import StepBar from './components/step-bar.vue'
import ConfigTitle from './components/config-title.vue'
import PackageConfig from  './components/package-config.vue'
import NextConfig from './components/next-config.vue'
import ConfigShape from './components/config-shape.vue'
	
export default {
	
data () {
	return {
		state: "package-config",
		allConfig:['package-config','config-shape','facade','frame','furniture','complectation','decore','done'],
		nextSteps:['Выбрать размер','Выбрать фасад','Выбрать корпус','Выбрать форнитуру','Выбрать наполнения', 'Выбрать декор','Завершить'],
		currentStep: 0
		
	}
},
methods:{
	nextConfig(){
		this.currentStep++;
		this.state = this.allConfig[this.currentStep];
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
	ConfigShape
}
}
</script>
