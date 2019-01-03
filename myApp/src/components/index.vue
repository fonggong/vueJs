<template>
	<div class="page">
		<transition >
			<router-view></router-view>
		</transition>
		<transition name="other">
			<router-view name="other"></router-view>
		</transition>	
	</div>
</template>

<script>
</script>

<style>
	.v-enter,.v-leave-active{
		opacity: 0.8;
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.5s;
	}
	.other-enter,.other-leave-active{
		transform: translateX(100%);
	}
	.other-enter-active,.other-leave-active{
		transition: all 0.5s;
	}
</style>