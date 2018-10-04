<template lang="pug">
	.step#step_2
		.configuration__title Выбрать размер {{choosenShape}}
		.wrap-shape
			.config-shape
				.config-shape__item
					input#shape_1(type="radio" name="shape" value="line-form"  v-model='choosenShape')
					label(for="shape_1") Прямая
					img(src="app/images/conf-type_01.png")
				.config-shape__item
					input#shape_2(type="radio" name="shape" value="l-revers-form" v-model='choosenShape')
					label(for="shape_2") Г-образная
					img(src="app/images/conf-type_02.png")
				.config-shape__item
					input#shape_3(type="radio" name="shape" value="l-form" v-model='choosenShape')
					label(for="shape_3") Г-образная
					img(src="app/images/conf-type_03.png")
				.config-shape__item
					input#shape_4(type="radio" name="shape" value="p-form"  v-model='choosenShape')
					label(for="shape_4") П-образная
					img(src="app/images/conf-type_04.png")
			.chosen-shape
				.chosen-shape__p-form(v-show="choosenShape == 'p-form'")
					.chosen-shape__img
						img(src="app/images/conf-type-big_04.png")
						label.top
							input(type="number" min="1")
							|  См.
						label.right
							input(type="number" min="1")
							|  См.
						label.bottom
							input(type="number" min="1")
							|  См.
				.chosen-shape__line-form
					.chosen-shape__img
						img(src="app/images/conf-type-big_01.png")
						label.right
							input(type="number" min="1")
							|  См.
						label.top
							input(type="number" min="1")
							|  См.
				.chosen-shape__l-revers-form
					.chosen-shape__img
						img(src="app/images/conf-type-big_02.png")
						label.top
							input(type="number" min="1")
							|  См.
						label.left
							input(type="number" min="1")
							|  См.
				.chosen-shape__l-form
					.chosen-shape__img
						img(src="app/images/conf-type-big_03.png")
						label.top
							input(type="number" min="1")
							|  См.
						label.right
							input(type="number" min="1")
							|  См.
</template>
<script>
export default{
	data () {
		return {
			choosenShape: "p-form"
		}
}

}
</script>
<style scoped="true">
	#step_1, #step_2, #step_3, #step_4, #step_5, #step_6, #step_7, #step_8 {
		display: flex;
	}
</style>