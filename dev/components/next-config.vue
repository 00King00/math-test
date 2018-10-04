<template>
<div class="next-config" >
	<div class="btn btn_back-step show-tablet" @click="$emit('prewConfig')" v-show="currentStep>0"> Назад
		<svg  data-name="Isolation Mode" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.41 15.19"><defs></defs><title>right-arrow-btn</title><path class="right-arrow-btn" d="M1893.69,710.79a1,1,0,0,1-.81-1.59l4.37-6-4.37-6a1,1,0,0,1,1.62-1.18l4.8,6.6a1,1,0,0,1,0,1.18l-4.8,6.6a1,1,0,0,1-.81.41Z" transform="translate(-1885.08 -695.6)"/><path class="right-arrow-btn" d="M1898.49,704.19h-12.41a1,1,0,0,1,0-2h12.41a1,1,0,0,1,0,2Z" transform="translate(-1885.08 -695.6)"/></svg>
	</div>
	<span>Следующий шаг:</span>
	<div class="btn btn_next" :class="{'active': choosen }" @click="next_btn">{{btn_next}}</div>
</div>
	
</template>

<script>
export default{
	data () {
	return {
		
	}
},
	props:['btn_next','currentStep', 'choosen'],
	methods:{
		next_btn(){
			if(this.choosen){
				this.$emit('nextConfig');
				console.log(this.choosen);
			}else {
				console.log(this.choosen);
			}
				
		}
	}
}
</script>
<style scoped="true">
	.right-arrow-btn{fill:#48a0bc;}
	.active{
		background-color: #6363de;
		color: white;
	}
</style>