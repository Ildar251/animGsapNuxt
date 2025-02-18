<script lang="ts" setup>
defineProps({
	className: {
		type: String,
		default: '',
	},
	isAuth: {
		type: Boolean,
		default: false,
	},
	showModal: {
		type: Function,
		default: null,
	},
})
</script>

<template>
	<button
		:class="['btn', `btn-${className}`]"
		@click="showModal && showModal()"
	>
		<slot>{{ isAuth ? 'Выйти' : 'Войти' }}</slot>
	</button>
</template>

<style lang="scss" scoped>
.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	border-radius: 15px;
	font-size: clamp-helper(16px, 18px);
	padding: 20px 35px;
	cursor: pointer;
	line-height: 1.6;
	letter-spacing: 0.04em;
	border: 1px solid transparent;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
		transition: all 0.3s ease-in-out;
		z-index: -1;
		border-radius: 15px;
	}

	&:hover {
		border: 1px solid transparent;

		&::before {
			background: rgba(255, 255, 255, 0.5);
			border: none;
			filter: blur(50px);
		}
	}

	&-primary {
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $accent-color;
			transition: all 0.3s ease-in-out;
			z-index: -1;
			border-radius: 15px;
		}

		&:hover::before {
			background: rgba(240, 68, 81, 0.5);
			filter: blur(50px);
		}
	}

	&-secondary {
		border: 1px solid #fff;
	}
}
</style>
