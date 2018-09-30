<template lang="pug">
	.alert.alert-secondary
		h2 LEVEL № {{level}}
		h3 Are you ready?
		button.btn.btn-success(@click='$emit("onStart")') Start
		button.btn.btn-success(@click='$emit("onChooseLevel")') Choose Level {{ level }}

</template>

<script>
	export default{
		props:['level'],
		methods:{
			
		}
		
	}



</script>
	
<style lang="scss" scoped>
	.alert{
		text-align: center;
		background-color: gray;
	}
	h3, .btn{
		margin: 30px 20px;
	}
</style>