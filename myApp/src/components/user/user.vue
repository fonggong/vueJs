<template>
	<div class="page user">
		<von-header theme="dark">
			<span @click="back" slot="left"></span>
			<span slot="title">用户登录-大众点评网</span>
			<span @click="actionSheet" slot='right'><i class="icon ion-more"></i></span>
		</von-header>
		<scroller class="scroller1">
			<div>
				<!--<i @click="toIndex" class="icon ion-chevron-left"></i>-->
				<span>绑定手机号码</span>
			</div>
			<div class="qing">请先通过手机号码安全验证后，继续使用</div>
			<div class="shouji">
				<div>
					<div><span>86</span><i class="icon ion-chevron-down"></i></div>
					<input type="text" placeholder="请输入手机号码" name="" id="" value="" />
					<div><span>发送验证码</span></div>
				</div>
				<div>
					<div><span>验证码</span></div>
					<input type="text" placeholder="请输入验证码" name="" id="" value="" />
				</div>
			</div>
		</scroller>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {

			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			toIndex() {
				this.$router.push("/index")
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
	.user {
		/*z-index: 20;*/
	}
	
	.user .scroller1 {
		margin-top: 44px;
		background: white;
	}
	
	.user .bar .title {
		width: 50%;
		margin: auto;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.user .bar .buttons {
		font-size: 16px;
		z-index: 10;
	}
	
	.user .bar .buttons:nth-of-type(1) {
		width: 15%;
	}
	
	.user .bar .buttons:nth-of-type(2) {
		width: 8%;
	}
	
	.user .bar .buttons>span {
		padding: 3px 5px;
		position: relative;
	}
	
	.user .bar .buttons span .dongtai {
		position: absolute;
		width: 50px;
		top: 8px;
		left: 18px;
	}
	
	.user .bar .buttons .icon:nth-of-type(1) {
		font-size: 20px;
		margin-right: 3px;
		position: absolute;
		top: 8px;
	}
	
	.user .scroller1>div:nth-of-type(1) {
		height: 44px;
		border-bottom: 1px solid #FF6900;
		text-align: center;
		line-height: 44px;
		position: relative;
		font-size: 18px;
		color: #333333;
	}
	
	.user .scroller1>div:nth-of-type(1) .icon {
		position: absolute;
		left: 5px;
		font-size: 20px;
		padding: 0px 10px;
		color: #FF6900;
	}
	
	.user .scroller1 .qing {
		font-size: 15px;
		color: #777;
		height: 44px;
		line-height: 44px;
		background: #f8f8f8;
		text-align: left;
		padding-left: 12px;
	}
	.user .scroller1 .shouji{
		padding-left: 10px;
		border-bottom: 1px solid #BBBBBB;
	}
	.user .scroller1 .shouji>div:nth-of-type(1){
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #BBBBBB;
		height: 44px;
		padding: 10px 10px 10px 0;
	}
	.user .scroller1 .shouji>div:nth-of-type(1)>div:nth-of-type(1){
		width: 70px;
		border-right: 1px solid #BBBBBB;
		height: 100%;
		line-height: 24px;
		font-size: 16px;
		text-align: left;
		position: relative;
		padding-left: 10px;
	}
	.user .scroller1 .shouji>div:nth-of-type(1)>div:nth-of-type(1) .icon{
		font-size: 16px;
		color: #888888;
		left: 25px;
		top: 4px;
	}
	.user .scroller1 .shouji>div:nth-of-type(1)>div:nth-of-type(2)>span{
		font-size: 15px;
		color: #888888;
		border: 1px solid #BBBBBB;
		padding: 3px 6px;
		border-radius: 5px;
		
	}
	.user .scroller1 .shouji>div:nth-of-type(2){
		position: relative;
		height: 44px;
		text-align: center;
		line-height: 44px;
	}
	.user .scroller1 .shouji>div:nth-of-type(2)>div{
		font-size: 16px;
		color: #333;
		position: absolute;
		width: 70px;
		left: 0;
	}
	.user .scroller1 .shouji>div:nth-of-type(2) input{
		position: absolute;
		left: 80px;
		top: 5px;
		width: 120px;
	}
	.user .scroller1 .shouji>div:nth-of-type(1) input{
		font-size: 16px;
		width: 130px;
		position: absolute;
		left: 90px;
	}
</style>