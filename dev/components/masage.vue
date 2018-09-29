<template lang="pug">
	.alert(:class=" 'alert-' + type " )
		h3 {{ text }}
		button.btn.btn-primary(@click="$emit('onNext')") Continue
</template>

<script>
export default{
	props: ['type', 'text'],

	

}



</script>

<style lang="scss">
	.alert{
		text-align: center;
	}

</style>