<script setup lang="ts">
import { usePreloader } from '@/composables/usePreloader'
import gsap from 'gsap'

const preloader = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)
const preloaderState = usePreloader()

onMounted(() => {
	const tl = gsap.timeline()

	tl.to(progressBar.value, {
		width: '100%',
		duration: 2,
		ease: 'power2.inOut',
	})

	tl.to(preloader.value, {
		opacity: 0,
		duration: 0.5,
		ease: 'power2.out',
		onComplete: () => {
			if (preloader.value) {
				preloader.value.style.display = 'none'
			}
			preloaderState.value = true // Устанавливаем состояние прелоадера в true
		},
	})
})
</script>
<template>
	<div class="preloader" ref="preloader">
		<div class="preloader__content">
			<div class="preloader__logo">
				<img src="@/public/images/logo.png" alt="Logo" />
			</div>
			<div class="preloader__progress">
				<div class="preloader__progress-bar" ref="progressBar"></div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.preloader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;

	&__content {
		text-align: center;
	}

	&__logo {
		margin-bottom: 20px;
	}

	&__progress {
		width: 200px;
		height: 4px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 2px;
		overflow: hidden;
	}

	&__progress-bar {
		height: 100%;
		width: 0;
		background: #f04451;
		border-radius: 2px;
	}
}
</style>
