<template lang="pug">
.next-config.active
	span Следующий шаг:
	.btn.btn_next(@click="$emit('nextConfig')") {{this.btn_next}}
	
</template>

<script>
export default{
	data () {
	return {
		
	}
},
	props:['btn_next']
}
</script>