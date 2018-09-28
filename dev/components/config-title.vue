<template lang="pug">
.configuration.page-kitchen
	.title.title_left {{doneConf}}
		.configuration__price
			.text Примерная стоимость
			span 54 900.00
			span р.
	
</template>

<script>
export default{
	data () {
	return {
		doneConf: 'Выберите конфигурацию',
		startConf: 'Конфигурация готова'
	}
},
}
</script>