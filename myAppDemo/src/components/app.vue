<template>
	<div>
		<transition>
			<router-view></router-view>
		</transition>
		<transition name='other'>
			<router-view name='other'></router-view>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style>
	.v-leave-active,.v-enter{
		opacity: 0.8;
		
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.4s;
	}
	.other-enter,.other-leave-active{
		transform: translateX(100%);
	}
	.other-enter-active,.other-leave-active{
		transition: 0.4s;
	}
</style>