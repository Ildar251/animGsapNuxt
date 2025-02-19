<script setup lang="ts">
import { gsap } from 'gsap'
const loading = ref(true)
const progressBar = ref<HTMLElement | null>(null)
onMounted(() => {
	gsap.to(progressBar.value, {
		width: '100%',
		duration: 3,
		ease: 'power2.out',
	})
	setTimeout(() => {
		loading.value = false
		window.dispatchEvent(new Event('preloadComplete')) // Сообщаем, что прелоадер завершился
	}, 3000)
})
</script>
<template>
	<Transition name="fade">
		<div v-if="loading" class="preloader">
			<div class="preloader__content">
				<div class="preloader__logo">
					<img src="@/public/images/logo.png" alt="Logo" />
				</div>
				<div class="preloader__progress">
					<div class="preloader__progress-bar" ref="progressBar"></div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style scoped lang="scss">
.preloader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: $main-color;
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
