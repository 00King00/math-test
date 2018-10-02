<template lang="pug">
.step#step_1.active
	.row.row_package-config.clearfix
		.configuration__title.configuration__title_marg-left_5 Категория
		.col-phablet-1-2.col-tablet-1-4
			.package-config.active
				.package-config__img
					img(src="../images/configurator_01.png" alt="foto")
				.package-config__name
					input#base-config(type="radio" name="package-config" checked)
					label(for="base-config") Базовый
		.col-phablet-1-2.col-tablet-1-4.clearfix
			.package-config
				.package-config__img
					img(src="../images/configurator_02.png" alt="foto")
				.package-config__name
					input#standart-config(type="radio" name="package-config")
					label(for="standart-config") Стандарт
		.col-phablet-1-2.col-tablet-1-4
			.package-config
				.package-config__img
					img(src="../images/configurator_03.png" alt="foto")
				.package-config__name
					input#premium-config(type="radio" name="package-config")
					label(for="premium-config") Премиум
		.col-phablet-1-2.col-tablet-1-4
			.package-config
				.package-config__img
					img(src="../images/individual_product.png" alt="foto")
				.package-config__name
					input#individual-config(type="radio" name="package-config")
					label(for="individual-config") Инд. предложение
</template>