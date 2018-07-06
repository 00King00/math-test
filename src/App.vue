<template lang="pug">
	.training
		AppStartScreen(v-if=" state=='start' ")
		AppQuestion(v-if=" state=='question' ")
		AppMasage(v-if=" state=='masage' ")
		AppResultScreen(v-if=" state=='results' ")
		

</template>

<script>
export default {
  data () {
    return {
      state: 'results'
    }
  }
}
</script>

<style lang="scss">
#app {
	
}
</style>
