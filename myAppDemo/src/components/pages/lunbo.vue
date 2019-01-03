<template>
	<swiper direction='horizontal' width='100%' height='200' pager-color='#00bfab' pager-bg-color='#bfbfbf'>
		<swiper-item>
			<router-link :to="item.path" class="fenleiItem" v-for='item in fenlei'>
				<div class="circle" :style="{background: item.bg}">
					<i :class="item.icon"></i>
				</div>
				<span>{{item.text}}</span>
			</router-link>
		</swiper-item>
		<swiper-item>
			12123
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				fenlei: [{
					text: "美食",
					bg: "#a0d24e",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "酒店住宿",
					bg: "#ec1e22",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "外卖",
					bg: "#7c4de0",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "KTV",
					bg: "#26cc5e",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "旅游出行",
					bg: "#f69012",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "丽人美发",
					bg: "#ff6900",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "猫眼电影",
					bg: "#1692dd",
					icon: "icon ion-ios-person",
					path: '/meishi'
				}, {
					text: "休闲娱乐",
					bg: "#e345e3",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "火车票",
					bg: "#ff6900",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}, {
					text: "周边游",
					bg: "#07b9f4",
					icon: "icon ion-ios-home",
					path: '/meishi'
				}]
			}
		}
	}
</script>

<style>
	.swiper {
		background: #FFFFFF;
	}
	
	.swiper .swiper-item {
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		padding-top: 20px;
	}
	
	.swiper .swiper-item .fenleiItem {
		width: 20%;
		height: 80px;
		text-align: center;
		text-decoration: none;
	}
	
	.swiper .swiper-item .fenleiItem .circle {
		width: 45px;
		height: 45px;
		border-radius: 30px;
		margin: 0 auto;
		margin-bottom: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.swiper .swiper-item .fenleiItem .circle>.icon {
		font-size: 25px;
		color: #FFFFFF;
	}
	
	.swiper .swiper-item .fenleiItem>span {
		font-size: 14px;
		color: #777;
	}
</style>