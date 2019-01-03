<template>
	<div class="page search">
		<header class="header">
			<span @click='back'>返回</span>
			<div>
				<i class="icon ion-ios-search-strong"></i>
				<input type="text" placeholder="加勒比海盗5"/>
			</div>
			<span>搜索</span>
		</header>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.search{
		z-index: 20;
	}
	.search .header {
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
	
	.search .header>div {
		width: 65%;
		height: 60%;
		background: #FFFFFF;
		border-radius: 30px;
	}
	
	.search .header>span {
		color: #FFFFFF;
		font-size: 16px;
	}
	
	.search .header>div>input {
		font-size: 14px;
		color: #BBBBBB;
		display: inline-block;
		height: 100%;
		width: 80%;
		border: none;
		background: none;
		outline: medium;
	}
	
	.search .header>div>.ion-ios-search-strong {
		color: #bbb;
		font-size: 18px;
		margin-left: 10px;
	}
</style>