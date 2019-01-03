<template>
	<div class="shouye">
		<von-header theme="dark">
			<span slot="left"><i class="icon ion-chevron-left"></i><span class="dongtai">动态</span></span>
			<span slot="title">吃喝玩乐</span>
			<span @click="actionSheet" slot='right'><i class="icon ion-more"></i></span>
		</von-header>
		<scroll ref="scroller" :on-refresh="onRefresh" :on-infinite="onInfinite">
			<div class="inp">
				<div><span>苏州</span><i class="icon ion-arrow-down-b"></i></div>
				<div @click="toInput"><i class="icon ion-search"></i><span>输入商户名、地点</span></div>

			</div>
			<div class="list">
				<router-link class="item" v-for="list in lists" :to="list.path">
					<div class="circle" :style="{background: list.bg}"><i :class="list.icon"></i></div>
					<div class="listNmae">{{list.name}}</div>
				</router-link>
			</div>
			<div class="fenlei">
				<router-link class="fenleiItem" v-for="item in items" :to="item.path">
					<div><i :class="item.icon"></i></div>
					<div>{{item.text}}</div>
				</router-link>
			</div>
			<!--轮播-->
			<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view name="tehui"></router-view>
			  <div slot="infinite" class="text-center">没有更多数据</div>
		</scroll>
	</div>
</template>

<script>
	export default {
		data:function() {
			return {
				lists: [{
						bg: "#33C0D0",
						icon: "icon ion-android-boat",
						name: "外卖",
						path: '/toWaimai'
					},
					{
						bg: "#FDBA2E",
						icon: "icon ion-android-restaurant",
						name: "美食",
						path: "/meishi"
					},
					{
						bg: "#FB593C",
						icon: "icon ion-easel",
						name: "电影/演出",
						path: "/maoyan"
					},
					{
						bg: "#7547FD",
						icon: "icon ion-xbox",
						name: "休闲娱乐",
						path: "/index"
					},
					{
						bg: "#359ADF",
						icon: "icon ion-card",
						name: "酒店",
						path: "/index"
					}
				],
				items: [{
						path: "/index",
						text: "丽人",
						icon: "icon ion-bowtie"
					},
					{
						path: "/index",
						text: "KTV",
						icon: "icon ion-mic-b"
					},
					{
						path: "/index",
						text: "运动健身",
						icon: "icon ion-android-bicycle"
					},
					{
						path: "/index",
						text: "结婚/摄影",
						icon: "icon ion-android-film"
					},
					{
						path: "/index",
						text: "全部分类",
						icon: "icon ion-android-apps"
					}
				]
			}
		},
		methods: {
			onRefresh(done) {
				setTimeout(function() {
					done()
				}, 2000)
			},
			onInfinite(done) {
				done()
			},
			toInput() {
				this.$router.push("/input")
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
	.main .scroll{
		margin-bottom: 52px;
	}
	.main .bar .buttons {
		font-size: 16px;
		z-index: 10;
	}
	
	.main .bar .buttons:nth-of-type(1) {
		width: 15%;
	}
	.main .bar .buttons:nth-of-type(2){
		width: 8%;
	}
	.main .bar .buttons>span {
		padding: 3px 5px;
		position: relative;
	}
	
	.main .bar .buttons span .dongtai {
		position: absolute;
		width: 50px;
		top: 8px;
		left: 20px;
	}
	
	.main .bar .buttons .icon:nth-of-type(1) {
		font-size: 22px;
		margin-right: 3px;
		position: absolute;
		top: 8px;
	}
	.main .bar .buttons .icon:nth-of-type(2){
		font-size: 22px;
		
		position: absolute;
		top: 5px;
		right: 2px;
	}
	
	.main .scroll {
		margin-top: 42px;
	}
	.main .inp {
		position: sticky;
		position: -webkit-sticky;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		color: white;
		background: #484746;
		top: 41px;
		z-index: 20;
	}
	
	.main .inp>div:nth-of-type(1) {
		height: 100%;
		line-height: 60px;
		font-size: 18px;
		position: relative;
		width: 15%;
		color: #A18369;
	}
	
	.main .inp>div:nth-of-type(1) span {
		position: absolute;
		left: 10px;
	}
	
	.main .inp>div:nth-of-type(1) .icon {
		position: absolute;
		top: 8px;
		right: 0px;
	}
	
	.main .inp>div:nth-of-type(2) {
		width: 70%;
		height: 40px;
		background: white;
		color: #888888;
		font-size: 18px;
		line-height: 40px;
		text-align: center;
		border-radius: 20px;
		position: relative;
	}
	
	.main .inp>div:nth-of-type(2) .icon {
		font-size: 25px;
		position: absolute;
		left: 20%;
		top: 3px;
	}
	
	.main .inp>div:nth-of-type(2) span {
		position: absolute;
		left: 28%;
		top: 0px;
	}
	
	.main .list {
		height: 100px;
		width: 100%;
		background: #484746;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: -1px;
		margin-bottom: 0;
	}
	
	.main .list .item {
		background: none;
		border: none;
		width: 20%;
		padding: 0;
		height: 100%;
		text-align: center;
	}
	
	.main .list .item .circle {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		color: white;
		margin: auto;
		font-size: 25px;
		margin-top: 10px;
	}
	
	.main .list .item .listNmae {
		font-size: 15px;
		margin-top: 10px;
		color: white;
		text-align: center;
	}
	.main .fenlei{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		height: 80px;
		border-bottom: 0.6px solid #888888;
		margin-top: 10px;
	}
	.main .fenlei .fenleiItem{
		width: 20%;
		text-align: center;
		text-decoration: none;
		color: #484746;
		font-size: 16px;
		height: 100%;
	}
	.main .fenlei .fenleiItem .icon{
		font-size: 40px;
		
	}
	.main .fenlei .fenleiItem div:nth-of-type(2){
		margin-top: 10px;
	}

</style>