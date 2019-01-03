<template>
	<div class="page around">
		<header class="header">
			<span @click='back'>返回</span>
			<div @click='toSearch'>
				<i class="icon ion-ios-search-strong"></i>
				<span>请输入地址</span>
			</div>
			<span>确定</span>
		</header>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			toSearch(){
				this.$router.push('/search')
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.around{
		z-index: 20;
	}
	.around .header {
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
	
	.around .header>div {
		width: 65%;
		height: 55%;
		background: #FFFFFF;
		border-radius: 30px;
	}
	
	.around .header>span {
		color: #FFFFFF;
		font-size: 16px;
	}
	
	.around .header>div>span:nth-of-type(1) {
		font-size: 12px;
		color: #BBBBBB;
	}
	
	.around .header>div>.ion-ios-search-strong {
		color: #bbb;
		font-size: 18px;
		margin-left: 10px;
	}
</style>