<template>
	<div class="page meishi">
		<header class="header">
			<span @click='back()'>返回</span>
			<div @click='toSearch'>
				<i class="icon ion-ios-search-strong"></i>
				<span>请输入搜索内容</span>
			</div>
			<span>扫码</span>
		</header>
		<scroll :on-refresh='onRefresh'>
			
		</scroll>
	</div>
</template>

<script>
	export default {
		methods:{
			onRefresh(done){
				setTimeout(()=>{
					done()
				},2000)
			},
			back(){
				this.$router.go(-1);
			},
			toSearch(){
				this.$router.push("/search")
			}
		}
	}
</script>

<style>
	.meishi{
		z-index: 20;
	}
	.meishi .header {
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
	.meishi .header>div {
		width: 65%;
		height: 55%;
		background: #FFFFFF;
		border-radius: 30px;
	}
	
	.meishi .header>span {
		color: #FFFFFF;
		font-size: 16px;
	}
	
	.meishi .header>div>span:nth-of-type(1) {
		font-size: 12px;
		color: #BBBBBB;
	}
	
	.meishi .header>div>.ion-ios-search-strong {
		color: #bbb;
		font-size: 18px;
		margin-left: 10px;
	}
</style>