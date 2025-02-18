<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
onMounted(() => {
	gsap.fromTo(
		'.animated-el-1',
		{ x: '-10vw', y: '-20vh', opacity: 0, rotate: 0 },
		{ x: '0', y: '0', opacity: 1, rotate: 360, duration: 4, ease: 'power3.out' }
	)
	gsap.fromTo(
		'.animated-el-2',
		{ x: '50vw', y: '-100vh', opacity: 0 },
		{ x: '0', y: '0', opacity: 1, duration: 2.5, ease: 'power3.out' }
	)
	gsap.fromTo(
		'.animated-el-3',
		{ x: '-10vw', y: '70vh', opacity: 0, rotate: 0 },
		{
			x: '0',
			y: '0',
			opacity: 1,
			rotate: 360,
			duration: 2.2,
			ease: 'power3.out',
		}
	)
	gsap.fromTo(
		'.animated-el-4',
		{ x: '-30vw', y: '10vh', opacity: 0, rotate: 0 },
		{
			x: '0',
			y: '0',
			opacity: 1,
			rotate: 360,
			duration: 2.8,
			ease: 'power3.out',
		}
	)
	gsap.fromTo(
		'.radial-gradient',
		{ scale: 0, opacity: 0 },
		{
			scale: 1,
			opacity: 0.5,
			duration: 1,
			ease: 'power2.out',
		}
	)
	gsap.fromTo(
		'.radial-gradient-2',
		{ scale: 0, opacity: 0 },
		{
			scale: 1,
			opacity: 0.5,
			duration: 1.5,
			ease: 'power2.out',
			delay: 0.3,
		}
	)
	gsap.fromTo(
		'.home__subtitle',
		{ opacity: 0, y: 30 },
		{
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 0,
			ease: 'power2.out',
		}
	)
	gsap.fromTo(
		'.home__title',
		{ opacity: 0, y: 30 },
		{
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 0.3,
			ease: 'power2.out',
		}
	)
	gsap.fromTo(
		'.home__list .list__item',
		{ opacity: 0, y: 30 },
		{
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 0.6,
			stagger: 0.2,
			ease: 'power2.out',
		}
	)

	gsap.fromTo(
		'.home__text .btn',
		{ opacity: 0, y: 30 },
		{
			opacity: 1,
			duration: 1,
			y: 0,
			stagger: 0.2,
			delay: 1.4,
			ease: 'power2.out',
		}
	)

	gsap.fromTo(
		'.home__image',
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 1,
			delay: 0,
			ease: 'power2.out',
		}
	)
})
</script>

<template>
	<section class="section about">
		<div class="background">
			<div class="radial-gradient"></div>
			<div class="radial-gradient radial-gradient-2"></div>

			<div class="animated-el animated-el-1">
				<img src="@/assets/images/bg-el-1.svg" alt="" />
			</div>
			<div class="animated-el animated-el-2">
				<img src="@/assets/images/bg-el-2.svg" alt="" />
			</div>
			<div class="animated-el animated-el-3">
				<img src="@/assets/images/bg-el-3.svg" alt="" />
			</div>
			<div class="animated-el animated-el-4">
				<img src="@/assets/images/bg-el-4.svg" alt="" />
			</div>
		</div>
		<div class="container container-flex">
			<div class="about__image">
				<NuxtImg src="/about.png" alt="hero" width="1300" />
			</div>
			<div class="about__text"></div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
