<script setup>
const props = defineProps({
	isAuth: Boolean,
	showModal: Function,
})
</script>
<template>
	<header class="header">
		<div class="container container-flex">
			<NuxtImg
				src="/logo.png"
				alt="logo"
				format="webp"
				width="152"
				height="61"
			/>

			<ul class="menu">
				<li class="menu__item"><NuxtLink to="/">Главная</NuxtLink></li>
				<li class="menu__item"><NuxtLink to="/about">О проекте</NuxtLink></li>
				<li class="menu__item"><NuxtLink to="/">Возможности</NuxtLink></li>
				<li class="menu__item"><NuxtLink to="/">Карточки</NuxtLink></li>
				<li class="menu__item"><NuxtLink to="/">Статистика</NuxtLink></li>
				<li class="menu__item"><NuxtLink to="/">FAQ</NuxtLink></li>
			</ul>

			<div class="buttons">
				<UiButton>{{ props.isAuth ? 'Выйти' : 'Войти' }}</UiButton>
				<UiButton className="primary" :showModal="openModal"
					>Регистрация</UiButton
				>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	margin: clamp(25px, 2.6vw, 50px) 0 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 10;
}

.menu {
	display: flex;
	align-items: center;
	gap: clamp-helper(10px, 50px);
	list-style-type: none;

	.menu__item {
		display: block;
		font-size: clamp-helper(14px, 18px);
		padding: 15px 0;
		white-space: nowrap;
		position: relative;

		&::before {
			@include pseudo-element(0, unset, 100%, 2px, $accent-color);
			bottom: 0;
			border-radius: 4px;
			transform-origin: right;
			transform: scaleX(0);
			transition: transform 0.3s ease-in-out;
		}

		&:hover::before {
			transform-origin: left;
			transform: scaleX(1);
		}
	}
}
</style>
