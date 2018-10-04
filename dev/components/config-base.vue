<template lang="pug">
.step#step_3
	mixin option-config(title, name, ...items)
		.option-config(@click="$emit('choosen')")
			.option-config__item.product_card
				.configuration__title= title
				ul.option-config__list.option-config__list_kitchen
					- var i=1;
					each item in items
						li
							input(type="radio" name=name id=name + i)
							label(for=name + i id=name + i)= item
						- i++
	div(v-show="mixinName == 'facade'")
		+option-config('Фасад','facade', 'Массив Классика', 'МДФ Классика','МДФ Шпон', 'МДФ Эмаль',' МДФ Пластик', 'МДФ Пленка')
	div(v-show="mixinName == 'frame'")
		+option-config('Корпус','frame', 'ДСП Ламинированое', 'МДФ Ламинированое', 'МДФ Эмаль','Массив Березы', 'Массив Бука, Ольхи', 'Массив Дуба, Ясеня')
	div(v-show="mixinName == 'furniture'")
		+option-config('Фурнитура','furniture',' Боярд (Россия)', 'Блюм (Австрия) ', 'Хеттих(Германия)' )
	div(v-show="mixinName == 'complectation'")
		+option-config('Наполнения','complectation', 'Сушка', 'Выдвижные ящики', 'Бутылочница', 'Волшебный уголок')
	div(v-show="mixinName == 'decor'")
		.option-config(@click="$emit('choosen')")
			.option-config__item.product_card
				.configuration__title Декор
				ul.option-config__list.option-config__list_kitchen
					li
						input#decor1(type="radio" name="decor")
						label(for="decor1") Карниз
					li
						input#decor2(type="radio" name="decor")
						label(for="decor2") Цоколь массив
					li
						input#decor3(type="radio" name="decor")
						label(for="decor3") Пилястра 
					li
						input#decor4(type="radio" name="decor")
						label(for="decor4") Колонна
					li
						input#decor5(type="radio" name="decor")
						label(for="decor5") Резные ноги
					li
						input#decor6(type="radio" name="decor")
						label(for="decor6") Витраж
							.remember
								.remember__container
									.remember__param
										.remember__title Количество
										input.remember__input(type="number")
										.remember__name Шт.
									.remember__param
										.remember__title Высота
										input.remember__input(type="number")
										.remember__name мм.
									.clearfix
									.remember__save
										a.btn(href="#") Запомнить
	div(v-show="mixinName == 'done'")
		.done-config.clearfix
					.configuration__title
						span Ваша конфигурация
					.done-config__flex
						.input-wrap
							.done-config__text Отправить запрос с данной конфигурацией
							input(placeholder="Представьтесь")
							input( type="tel" placeholder="+7(___) ___ - __ - __")
							input.mail( type="email" placeholder="E-mail")
							.flex
								input(type="submit" value="Отправить" )
								a(href="#").btn.btn_save
									|Сохранить
						.configuration-table
							table
								tbody
									tr
										td.config Конфигурация:
										td.val Базовая
										td.price
											span 54 900.00
											span р.
									tr
										td.config Размер:
										td.val 50х20
										td.price
											span 900.00
											span р.
									tr
										td.config Фасад:
										td.val Белый
										td.price
											span 900.00
											span р.
									tr
										td.config Наполнение:
										td.val Полное
										td.price
											span 2100.00
											span р.
									tr
										td.config Корпус:
										td.val Дерево
										td.price
											span 2100.00
											span р.
									tr
										td.config Фурнитура:
										td.val Немецкая
										td.price
											span 900.00
											span р.
									tr
										td.config Декор:
										td.val Красивый
										td.price
											span 54 900.00
											span р.
							.configuration__price
								span Итого:
								span 54 900.00
								span р.
					.btn.btn_back-step.btn_back-step_final Назад
</template>
<script>
	export default{
		props:['mixinName']
	}
</script>
<style>
	#step_1, #step_2, #step_3, #step_4, #step_5, #step_6, #step_7, #step_8 {
		display: flex;
	}
</style>