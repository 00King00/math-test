<template lang="pug">
	.alert.alert-primary
		h3 Success: {{ stats.success }}
		h3 Error: {{ stats.error }}
		button.btn.btn-primary( @click="$emit('repeat')") Repeat
		button.btn.btn-primary( @click="$emit('nextLevel')") Next Level

</template>

<script>
export default {
	props: ['stats']
}



</script>

<style lang="scss" scoped>
	button{
		margin: 50px;
	}
</style>