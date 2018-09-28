<template lang="pug">
ul.step-bar
	li(v-for="n in numStep" :class="[n==1 ? 'active' : '']")  Шаг.{{n}}
	
</template>

<script>
export default{
	data () {
	return {
		numStep: 8,
		startStep: 1
	}
},
}
</script>