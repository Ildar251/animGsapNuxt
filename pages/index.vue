<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Pagination, Mousewheel]
</script>

<template>
	<Swiper
		:modules="modules"
		:slides-per-view="1"
		:space-between="50"
		navigation
		:pagination="{ clickable: true }"
		:scrollbar="{ draggable: true }"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
		direction="vertical"
		:mousewheel="{
			enabled: true,
			invert: false,
			forceToAxis: true,
		}"
	>
		<SwiperSlide>
			<SectionHero />
		</SwiperSlide>
		<SwiperSlide>
			<SectionAbout />
		</SwiperSlide>
	</Swiper>
</template>

<style lang="scss" scoped></style>
