<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { onMounted, onUnmounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
	if (!import.meta.client) return
	if (!canvasRef.value) return

	const scene = new THREE.Scene()
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	)
	const renderer = new THREE.WebGLRenderer({
		canvas: canvasRef.value,
		alpha: true,
	})
	renderer.setSize(window.innerWidth, window.innerHeight)
	renderer.setPixelRatio(window.devicePixelRatio)

	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshStandardMaterial({ color: 0xff0055 })
	const cube = new THREE.Mesh(geometry, material)
	scene.add(cube)

	const light = new THREE.AmbientLight(0xffffff, 1)
	scene.add(light)

	camera.position.z = 3
	cube.position.x = 2

	const aboutSection = document.querySelector('#about') as HTMLElement
	const aboutRect = aboutSection.getBoundingClientRect()
	const aboutCenterX = aboutRect.left + aboutRect.width / 2
	const aboutCenterY = aboutRect.top + aboutRect.height / 2

	gsap.to(cube.position, {
		x: aboutCenterX / window.innerWidth,
		y: -(aboutCenterY / window.innerHeight),
		scrollTrigger: {
			trigger: '#about',
			start: 'top bottom',
			end: 'top center',
			scrub: 1,
		},
	})

	gsap.to(cube.scale, {
		x: 2,
		y: 2,
		z: 2,
		scrollTrigger: {
			trigger: '#about',
			start: 'top bottom',
			end: 'top center',
			scrub: 1,
		},
	})

	const animate = () => {
		requestAnimationFrame(animate)
		cube.rotation.x += 0.01
		cube.rotation.y += 0.01
		renderer.render(scene, camera)
	}
	animate()

	onUnmounted(() => {
		renderer.dispose()
	})

	window.addEventListener('preloadComplete', () => {
		gsap.fromTo(
			'.animated-el-1',
			{ x: '-10vw', y: '-20vh', opacity: 0, rotate: 0 },
			{
				x: '0',
				y: '0',
				opacity: 1,
				rotate: 360,
				duration: 4,
				ease: 'power3.out',
			}
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
})
</script>

<template>
	<section class="section home">
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
			<div class="home__text">
				<span class="home__subtitle">Cyber Sport Network</span>
				<h1 class="home__title">Играй, развивайся и выигрывай вместе с нами</h1>
				<ul class="home__list list">
					<li class="list__item"><span>Ежедневные турниры</span></li>
					<li class="list__item"><span>Денежные призы</span></li>
					<li class="list__item"><span>Свой подход к читерству</span></li>
					<li class="list__item">
						<span>Уникальная рейтинговая система</span>
					</li>
					<li class="list__item">
						<span>Развитие в любой отрасли киберспорта</span>
					</li>
					<li class="list__item"><span>Интересный матчмейкинг</span></li>
				</ul>

				<div class="buttons">
					<UiButton className="primary">Присоединиться</UiButton>
					<UiButton className="secondary">О проекте</UiButton>
				</div>
			</div>
			<div class="home__canvas">
				<canvas ref="canvasRef"></canvas>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.home {
	position: relative;
	.home__canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	canvas {
		width: 100% !important;
		height: 100% !important;
	}

	.container {
		position: static;
	}

	.background {
		width: 100%;
		height: 100%;
		position: absolute;

		.radial-gradient {
			background: rgba(240, 68, 81, 0.5);
			opacity: 0.5;
			filter: blur(250px);
			position: absolute;
			width: 21.51vw;
			height: 21.51vw;
			left: calc(-21.51vw / 2);
			top: calc(-21.51vw / 2);

			&-2 {
				left: unset;
				right: calc((100vw - 1345px) / 2);
				top: calc(50% - 21.51vw / 2);
			}
		}

		.animated-el {
			width: 200px;
			height: 200px;
			position: absolute;

			&-1 {
				top: 10%;
				left: 7%;
			}
			&-2 {
				top: 10%;
				right: 7%;
			}
			&-3 {
				bottom: 10%;
				left: 7%;
			}
			&-4 {
				bottom: 10%;
				left: 40%;
			}
		}
	}
	.home__text {
		width: 55%;

		.home__title {
			text-transform: uppercase;
			margin-top: 15px;
			white-space: balance;
			will-change: transform, opacity;
		}

		.home__subtitle {
			font-size: clamp-helper(14px, 18px);
			opacity: 0.5;
			display: inline-block;
			will-change: transform, opacity;
		}

		.home__list {
			display: flex;
			flex-direction: column;
			gap: 0 25px;
			flex-wrap: wrap;
			max-height: 100px;
			margin-top: 25px;
			width: fit-content;

			.list__item {
				will-change: transform, opacity;
			}
		}

		.buttons {
			margin-top: clamp-helper(20px, 45px);
			gap: 15px;
		}
	}

	.home__image {
		width: 45%;
		flex: 1;
		margin-left: -3%;
		margin-right: -22%;
	}
}
</style>
