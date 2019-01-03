<template>
	<div class="page maoyan">
		<von-header theme="dark">
			<span @click="back" slot="left"><i class="icon ion-chevron-left"></i><span class="dongtai">返回</span></span>
			<span slot="title">猫眼电影</span>
			<span @click="actionSheet" slot='right'><i  class="icon ion-more"></i>
			</span>
		</von-header>
		<scroll :on-refresh="onRefresh">
			<tabs tab-color="assertive" :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
			<swiper :callback="callback" ref="swiperx" direction="horizontal" width="100%" hide-pager="true">
				<swiper-item>
					<div class="inp">
						<i class="icon ion-search"></i> 搜电影、搜影院
					</div>
					<hr />
					<div class="details">
						<router-link class="toList" :to="list.path" v-for="list in lists">
							<div :class="list.bg"></div>
							<div>
								<div>{{list.name}}
									<span :class="list.shishi">{{list.dd}}</span><span :class="list.shishi">{{list.max}}</span>
								</div>
								<div>
									<span>{{list.ping}}</span>
									<span>{{list.fen}}</span>
									<span :style="{background: list.bg1}">{{list.goupiao}}</span>
								</div>
								<div>
									主演：<span>{{list.zhuyan}}</span>
								</div>
								<div>
									{{list.date}}
								</div>
							</div>
						</router-link>
					</div>
				</swiper-item>
				<swiper-item>
					<div class="inp">
						<i class="icon ion-search"></i> 搜电影、搜影院
					</div>
					<hr />
				</swiper-item>
				<swiper-item>
				<div class="inp">
						<i class="icon ion-search"></i> 搜电影、搜影院
					</div>
					<hr />
				</swiper-item>
			</swiper>
		</scroll>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				tabs: ["电影", "影院", "演出"],
				tabIndex: 0,
				lists: [{
						path: "/maoyan",
						name: "战狼2",
						dd: "3D",
						shishi: "shishi",
						max: "IMAX",
						ping: "观众评",
						fen: "9.5",
						zhuyan: "吴京,弗兰克·格里罗,吴刚,卢靖姗",
						goupiao: "购票",
						date: "今天140加影院放映2068场",
						bg: "zhanlang",
						bg1: "#FF0000"
					},
					{
						path: "/maoyan",
						name: "罗马假日",
						ping: "观众评",
						fen: "8.5",
						zhuyan: "奥黛丽·赫本，格里高利·派克",
						goupiao: "预售",
						date: "今天140加影院放映2855场",
						bg: "luoma",
						bg1: "#4312FF"
					}, {
						path: "/maoyan",
						name: "侏罗纪世界2",
						dd: "3D",
						shishi: "shishi",
						max: "IMAX",
						ping: "观众评",
						fen: "8.2",
						zhuyan: "克里斯·帕拉特，布莱丝·达拉斯·霍华德",
						goupiao: "预售",
						date: "今天140加影院放映2855场",
						bg: "zhanlang",
						bg1: "#4312FF"
					},
					{
						path: "/maoyan",
						name: "英雄本色",
						ping: "观众评",
						fen: "9.0",
						zhuyan: "周润发，张国荣，狄龙",
						goupiao: "预售",
						date: "今天140加影院放映1255场",
						bg: "ying",
						bg1: "#4312FF"
					},
					{
						path: "/maoyan",
						name: "少林寺",
						ping: "观众评",
						fen: "8.6",
						zhuyan: "李连杰,于承惠",
						goupiao: "购票",
						date: "今天140加影院放映726场",
						bg: "shao",
						bg1: "#FF0000"
					},
					{
						path: "/maoyan",
						name: "霸王别姬",
						ping: "观众评",
						fen: "9.7",
						zhuyan: "张国荣，巩俐，张丰毅",
						goupiao: "购票",
						date: "今天140加影院放映986场",
						bg: "bawang",
						bg1: "#FF0000"
					}
				]
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			onRefresh(done) {
				setTimeout(done, 1000)
			},
			onTabClick(index) {
				this.tabIndex = index;
				this.$refs.swiperx.go(index);
			},
			callback(old, val) {
				this.tabIndex = val;
				console.log(val)
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
	.maoyan .bar .buttons {
		font-size: 16px;
		z-index: 10;
	}
	
	.maoyan .bar .buttons:nth-of-type(1) {
		width: 15%;
	}
	
	.maoyan .bar .buttons:nth-of-type(2) {
		width: 8%;
	}
	
	.maoyan .bar .buttons>span {
		padding: 3px 5px;
		position: relative;
	}
	
	.maoyan .bar .buttons span .dongtai {
		position: absolute;
		width: 50px;
		top: 6px;
		left: 18px;
	}
	
	.maoyan .bar .buttons .icon:nth-of-type(1) {
		font-size: 22px;
		margin-right: 3px;
		position: absolute;
		top: 5px;
	}
	
	.maoyan .scroll {
		margin-top: 43px;
	}
	.maoyan .scroll .tabs .tab-item {
		font-size: 16px;
		color: #333333;
		margin: 0 12px;
	}
	
	.maoyan .scroll .tabs .active {
		color: #FF6900;
		font-size: 17px;
	}
	
	.maoyan .scroll .swiper {
		margin-top: 50px;
	}
	
	.maoyan .scroll .swiper .inp {
		text-align: center;
		font-size: 15px;
		color: #BBBBBB;
		background: white;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		position: relative;
		width: 90%;
	}
	
	.maoyan .scroll .swiper .inp .icon {
		font-size: 20px;
		position: absolute;
		left: 30%;
		top: 2px;
	}
	
	.maoyan .scroll .details {
		display: flex;
		flex-direction: column;
		width: 100%;
		background: white;
	}
	
	.maoyan .scroll .details .toList {
		width: 100%;
		text-decoration: none;
		display: flex;
		justify-content: space-between;
		padding: 10px 6px 10px 10px;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(1) {
		height: 100px;
		width: 80px;
		border: 1px solid #CCCCCC;
		background-size: cover;
	}
	
	.maoyan .scroll .details .toList .luoma {
		background-image: url(../../../img/luoma.jpg);
	}
	
	.maoyan .scroll .details .toList .zhanlang {
		background-image: url(../../../img/zhanlang.jpg);
	}
	
	.maoyan .scroll .details .toList .zhu {
		background-image: url(../../../img/zhu.jpg);
	}
	.maoyan .scroll .details .toList .shao {
		background-image: url(../../../img/shao.jpg);
	}
	.maoyan .scroll .details .toList .ying {
		background-image: url(../../../img/ying.jpg);
	}
	.maoyan .scroll .details .toList .bawang {
		background-image: url(../../../img/bawang.jpg);
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2) {
		width: calc(100% - 80px);
		margin-left: 10px;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(1) {
		font-size: 18px;
		font-family: "微软雅黑";
		color: #333333;
		padding: 5px 0;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(1) .shishi {
		font-size: 12px;
		color: #FF6900;
		margin-left: 5px;
		border: 1px solid #CCCCCC;
		padding: 0 1px;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(2) {
		padding: 5px 0;
		position: relative;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(1) {
		font-size: 13px;
		color: #888888;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(2) {
		font-size: 14px;
		color: #FF6900;
		margin-left: 5px;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(3) {
		font-size: 15px;
		color: white;
		padding: 3px 8px;
		border-radius: 5px;
		position: absolute;
		right: 10px;
		top: 9px;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(3) {
		font-size: 13px;
		color: #888888;
		padding: 3px 0;
	}
	
	.maoyan .scroll .details .toList>div:nth-of-type(2)>div:nth-of-type(4) {
		font-size: 13px;
		color: #888888;
		padding: 3px 0;
	}
	.action-sheet-backdrop{
		z-index: 100;
	}
	 .action-sheet .action-sheet-group{
	 	display: flex;
	 	flex-wrap: wrap;
	 	background: #e0e0e0;
	 }
	 .action-sheet .action-sheet-title{
	 	width: 100%;
	 	font-size: 14px!important;
	 }
	 .action-sheet .button{
	 	width: 25%;
	 	font-size: 13px!important;
	 	color: #888888;
	 }
	 .action-sheet .button .toicon{
	 	height: 60px;
	 	width: 60px;
	 	background: white;
	 	margin: auto;
	 	border-radius: 10px;
	 	background: white;
	 	background-repeat: no-repeat;
	 	background-size: 50%;
	 	background-position: center;
	 }
	 .action-sheet .action-sheet-group:nth-of-type(1) .button:nth-of-type(1) .toicon{
	 	background-image: url(../../../icon/person-fill.svg);
	 }
	  .action-sheet .action-sheet-group:nth-of-type(1) .button:nth-of-type(2) .toicon{
	 	background-image: url(../../../icon/QQ.svg);
	 }
	  .action-sheet .action-sheet-group:nth-of-type(1) .button:nth-of-type(3) .toicon{
	 	background-image: url(../../../icon/weixin.svg);
	 }
	  .action-sheet .action-sheet-group:nth-of-type(1) .button:nth-of-type(4) .toicon{
	 	background-image: url(../../../icon/pengyouquan.svg);
	 }
	  .action-sheet .action-sheet-group:nth-of-type(1) .button:nth-of-type(5) .toicon{
	 	background-image: url(../../../icon/tuiguang.svg);
	 }
	  .action-sheet .action-sheet-group:nth-of-type(1) .button:nth-of-type(6) .toicon{
	 	background-image: url(../../../icon/fuzhi.svg);
	 }
	  .action-sheet .action-sheet-group:nth-of-type(1) .button:nth-of-type(7) .toicon{
	 	background-image: url(../../../icon/jubao.svg);
	 }
	.action-sheet .action-sheet-cancel .button{ 
		width: 100%;
		color: #333333;
		font-size: 18px!important;
	}
</style>