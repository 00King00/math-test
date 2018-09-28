<template lang="pug">
	.wrapper
		step-bar
		config-title
		form
			package-config
		
		

</template>

<script>
import StepBar from './components/step-bar.vue'
import ConfigTitle from './components/config-title.vue'
import PackageConfig from './components/package-config.vue'
export default {
	
data () {
	return {

	}
},
methods:{


},
computed:{

},
components:{
	StepBar,
	ConfigTitle,
	PackageConfig
}
}
</script>
