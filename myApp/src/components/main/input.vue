<template>
	<div class="page search">
		<von-header theme="dark">
			<span @click="back" slot="left"><i class="icon ion-chevron-left"></i><span class="dongtai">返回</span></span>
			<span slot="title">吃喝玩乐</span>
			<span @click="actionSheet" slot='right'><i class="icon ion-more"></i></span>
		</von-header>
		<div class="inp">
			<input type="text" placeholder="龙湖时代天街" name="" id="" value="" />
			<div @click="back">取消</div>
		</div>
		<div class="lists">
			<div>
				<div>蛋糕</div>
				<div>霸王餐</div>
				<div>火锅</div>
				<div>星巴克</div>
				<div>喜茶</div>
				<div>小龙饮</div>
				<div>印象城</div>
				<div>龙湖时代天街</div>
				<div>苏州中心</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			back() {
				this.$router.go(-1)
			  },
				actionSheet() {
				$actionSheet.show({
					title:"分享到",
					theme:"winxin",
					buttons:{
						"好友":function(){
							alert("已分享给好友")
						},
						"QQ空间":function() {
							alert("已分享到QQ空间")
						},
						"微信":function() {
							alert("已分享到微信")
						},
						"朋友圈":function() {
							alert("已分享到朋友圈")
						},
						"收藏":function() {
							alert("已收藏")
						},
						"复制链接":function() {
							alert("已复制链接")
						},
						"举报":function() {
							alert("已举报")
						}
					},
					cancelText:"取消"
				})
			}
		}
	}
</script>

<style>
	.search{
		z-index: 30;
	}
	.search .inp{
		margin-top: 43px;
		display: flex;
		justify-content: space-between;
		height: 60px;
		line-height: 60px;
		background: white;
		padding: 0 10px;
	}
	.search .inp>div:nth-of-type(1){
		width: 70px;
		height: 100%;
		font-size: 16px;
		text-align: center;
		color: #FF6900;
		cursor: pointer;
	}
	.search .inp>input{
		background: #f6f6f6;
		width: calc(100% - 70px);
		height: 40px;
		margin-top: 10px;
		border-radius: 25px;
		padding: 0 15px;
		cursor: pointer;
	}
	
	.search .bar .buttons {
		font-size: 16px;
		z-index: 10;
	}
	
	.search .bar .buttons:nth-of-type(1) {
		width: 15%;
	}
	.search .bar .buttons:nth-of-type(2){
		width: 8%;
	}
	.search .bar .buttons>span {
		padding: 3px 5px;
		position: relative;
	}
	
	.search .bar .buttons span .dongtai {
		position: absolute;
		width: 50px;
		top: 8px;
		left: 20px;
	}
	
	.search .bar .buttons .icon:nth-of-type(1) {
		font-size: 22px;
		margin-right: 3px;
		position: absolute;
		top: 8px;
	}
	.search .bar .buttons .icon:nth-of-type(2){
		font-size: 22px;
		
		position: absolute;
		top: 5px;
		right: 2px;
	}
	.search .lists>div{
		height: 200px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background: white;
		padding: 10px 16px;
		margin-top: 10px;
	}
	.search .lists>div>div{
		height: 40px;
		width: calc(100% / 3);
		background: #F6F6F6;
		font-size: 15px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
		color: #888888;
	}
	.search .lists>div>div:nth-of-type(2){
		border-left: 1px solid #CCCCCC;
		border-right: 1px solid #CCCCCC;
	}
	.search .lists>div>div:nth-of-type(5){
		border-left: 1px solid #CCCCCC;
		border-right: 1px solid #CCCCCC;
	}
	.search .lists>div>div:nth-of-type(8){
		border-left: 1px solid #CCCCCC;
		border-right: 1px solid #CCCCCC;
	}
</style>