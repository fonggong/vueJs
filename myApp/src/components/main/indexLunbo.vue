<template>
	<div class="lunbo">
		<div></div>
		<div>
			<swiper ref="swiper" :callback="callBack" hide-pager="true">
				<swiper-item><img src="../../img/mm1.jpg" /></swiper-item>
				<swiper-item><img src="../../img/mm2.jpg" /></swiper-item>
				<swiper-item><img src="../../img/mm3.jpg" /></swiper-item>
				<swiper-item><img src="../../img/mm4.jpg" /></swiper-item>
				<swiper-item><img src="../../img/mm1.jpg" /></swiper-item>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				interval: null
			}
		},
		methods: {
			callBack(val) {

			}
		},
		mounted: function() {
			var fg = 0;
			this.interval = setInterval(function() {
				fg++;
				if(fg == 5) {
					fg = 0
				}
				this.$refs.swiper.go(fg);
			}.bind(this), 3000)
			
		},
		beforeDestroy: function() {
			//console.log(this.$refs.swiper)
			clearInterval(this.interval)

		},
		destroyed() {
		}
	}
</script>

<style>
	.main .lunbo {
		width: 100%;
		height: 80px;
		background: white;
		display: flex;
		justify-content: space-between;
		padding: 12px 8px;
	}
	
	.main .lunbo>div:nth-of-type(1) {
		width: 70px!important;
		background: url(../../img/mm5.jpg);
		background-size: cover;
	}
	
	.main .lunbo>div:nth-of-type(2) {
		width: calc(100% - 70px);
		height: 100%;
		background: green;
		margin-left: 20px;
	}
	
	.main .lunbo .swiper img {
		width: 100%;
		height: 100%;
	}
</style>