export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/image'],
	ssr: false,
	image: {
		dir: 'public/images',
		format: ['webp'],
		quality: 100,
	},
	css: ['~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					additionalData: `@use '@/assets/scss/mixins' as *; @use '@/assets/scss/variables'  as *;`,
				},
			},
		},
	},
})
