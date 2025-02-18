<script setup lang="ts">
import Preloader from '@/components/Preloader.vue'
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
	// Симуляция загрузки контента
	setTimeout(() => {
		isLoaded.value = true
	}, 2500) // Время должно совпадать с длительностью анимации прелоадера
})
</script>

<template>
	<div>
		<Preloader v-if="!isLoaded" />
		<NuxtLayout />
	</div>
</template>
