<template>
	<div class="page home">
		<header class="header">
			<span>上海</span>
			<div @click='toSearch'>
				<i class="icon ion-ios-search-strong"></i>
				<span>请输入搜索内容</span>
			</div>
			<span>扫码</span>
		</header>
		<scroll :on-refresh='onRefresh'>
			<router-view name='lunbo'></router-view>
			<router-view name='gongge'></router-view>
			<item class='text-center title'>- 猜你喜欢 -</item>
		</scroll>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			onRefresh(done) {
				setTimeout(() => {
					done()
				}, 2000)
			},
			toSearch(){
				this.$router.push("/search")
			}
		}
	}
</script>

<style>
	.home .header {
		height: 44px;
		background: #06BFAB;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
	}
	
	.home .scroll {
		top: 0;
	}
	
	.home .header>div {
		width: 65%;
		height: 55%;
		background: #FFFFFF;
		border-radius: 30px;
	}
	
	.home .header>span {
		color: #FFFFFF;
		font-size: 16px;
	}
	
	.home .header>div>span:nth-of-type(1) {
		font-size: 12px;
		color: #BBBBBB;
	}
	
	.home .header>div>.ion-ios-search-strong {
		color: #bbb;
		font-size: 18px;
		margin-left: 10px;
	}
	.home .scroll .item{
		min-height: 35px;
		padding-top: 0px;
		padding-bottom: 0px;
		font-size: 14px;
		line-height: 35px;
	}
</style>