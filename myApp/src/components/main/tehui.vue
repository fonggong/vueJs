<template>
	<div class="tehui">
		<div>
			<div>
				<span>专属超值特惠</span>
				<span>就是要出去HIGH</span>
			</div>
			<div>
				<span>更多</span><i class="icon ion-arrow-right-b"></i>
			</div>
		</div>
		<div>
			<router-link v-for="list in lists" class="toList" :to="list.path">
				<div :class='list.url'></div>
				<div>{{list.text}}</div>
				<div>
					<span>
						￥&ensp;{{list.newP}}
					</span>
					<del>
						￥{{list.oldP}}
					</del>
				</div>
			</router-link>
		</div>
		<div>猜你喜欢</div>
		<div>
			<router-link class="toItem" :to="item.path" v-for="item in items">
				<div :class='item.url'></div>
				<div>
					<div>{{item.name}}</div>
					<div>
						{{item.tip}}
					</div>
					<div>
						<span>￥{{item.newP}}</span>
						<del>￥{{item.oldP}}</del>
						<span>已售{{item.yishou}}</span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				lists: [{
						path: "/index",
						text: "乌煎道黑龙茶",
						newP: "7.8",
						oldP: "11",
						url: 'one'
					},
					{
						path: "/index",
						text: "7分甜",
						newP: "9.9",
						oldP: "12",
						url: 'two'
					},
					{
						path: "/index",
						text: "正宗重庆酸辣...",
						newP: "9.8",
						oldP: "12",
						url: 'three'
					}
				],
				items: [{
						name: "四川香天下火锅",
						tip: "[6店通用]红糖糍粑1份，提供免费WiFi",
						newP: "3.9",
						oldP: "21",
						yishou: "4066",
						path: '/huoguo',
						url:'one'
					},
					{
						name: "华莱士",
						tip: "[11店通用]红糖糍粑1份，提供免费WiFi",
						newP: "11",
						oldP: "21",
						yishou: "42006",
						path: '/hualaishi',
						url:'two'
					},
					{
						name: "正新鸡排",
						tip: "[23店通用]红糖糍粑1份，提供免费WiFi",
						newP: "9.9",
						oldP: "20",
						yishou: "929904",
						path: '/zhengxin',
						url:'three'
					},
					{
						name: "孙胜兴奥灶面馆",
						tip: "[9店通用]红糖糍粑1份，提供免费WiFi",
						newP: "9.9",
						oldP: "26",
						yishou: "15516",
						path: '/mianguan',
						url:'four'
					}
				]
			}
		}
	}
</script>

<style>
	.main .tehui {
		margin-top: 10px;
		background: #FFFFFF;
	}
	
	.main .tehui>div:nth-of-type(1) {
		height: 65px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.main .tehui>div:nth-of-type(2) {
		padding: 0 12px;
	}
	
	.main .tehui>div:nth-of-type(1)>div:nth-of-type(1) {
		display: flex;
		flex-direction: column;
		align-content: center;
		margin-left: 10px;
	}
	
	.main .tehui>div:nth-of-type(1)>div:nth-of-type(1)>span:nth-of-type(1) {
		font-size: 18px;
		color: #A18369;
	}
	
	.main .tehui>div:nth-of-type(1)>div:nth-of-type(1)>span:nth-of-type(2) {
		font-size: 13px;
		margin-top: 3px;
		color: #444;
	}
	
	.main .tehui>div:nth-of-type(1)>div:nth-of-type(2) {
		position: relative;
		width: 12%;
		height: 50%;
		margin-right: 10px;
	}
	
	.main .tehui>div:nth-of-type(1)>div:nth-of-type(2)>span {
		font-size: 14px;
		color: #444;
		position: absolute;
		top: 5px;
		left: 0;
	}
	
	.main .tehui>div:nth-of-type(1)>div:nth-of-type(2) .icon {
		font-size: 16px;
		position: absolute;
		right: 6px;
		top: 7px;
	}
	
	.main .tehui>div:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.main .tehui .toList {
		width: 31%;
		height: 160px;
		text-decoration: none;
		text-align: center;
		color: #333;
		border: 1px solid #ccc;
	}
	
	.main .tehui .toList>div:nth-of-type(1) {
		width: 100%;
		height: 72%;
		background-size: 100%;
	}
	.main .tehui .toList .one{
		background-image: url(../../img/mm6.jpg);
	}
	.main .tehui .toList .two{
		background-image: url(../../img/mm7.jpg);
	}
	.main .tehui .toList .three{
		background-image: url(../../img/mm8.jpg);
	}
	
	.main .tehui .toList>div:nth-of-type(2) {
		margin-top: 5px;
		font-size: 15px;
	}
	
	.main .tehui .toList>div:nth-of-type(3)>span:nth-of-type(1) {
		color: #FF6900;
		font-size: 15px;
	}
	
	.main .tehui .toList>div:nth-of-type(3)>del {
		color: #999;
		font-size: 12px;
	}
	
	.main .tehui>div:nth-of-type(3) {
		width: 100%;
		height: 40px;
		color: #888888;
		line-height: 75px;
		text-align: left;
		padding: 0 0 0 12px;
	}
	
	.main .tehui>div:nth-of-type(4) {
		display: flex;
		flex-direction: column;
		padding: 10px 0 10px 12px;
	}
	
	.main .tehui .toItem {
		height: 100px;
		width: 100%;
		border-bottom: 1px solid #999999;
		padding: 10px 0;
		display: flex;
		text-decoration: none;
		justify-content: space-between;
	}
	
	.main .tehui .toItem>div:nth-of-type(1) {
		height: 100%;
		width: 25%;
		background-size: 100%;
	}
	.main .tehui .toItem .one{
		background-image: url(../../img/huo1.jpg);
	}
	.main .tehui .toItem .two{
		background-image: url(../../img/hua3.jpg);
	}
	.main .tehui .toItem .three{
		background-image: url(../../img/zheng3.jpg);
	}
	.main .tehui .toItem .four{
		background-image: url(../../img/mian1.jpg);
	}
	
	.main .tehui .toItem>div:nth-of-type(2) {
		width: 75%;
		height: 100%;
		margin-left: 10px;
	}
	
	.main .tehui .toItem>div:nth-of-type(2)>div:nth-of-type(1) {
		font-size: 17px;
		font-family: "微软雅黑";
		text-align: left;
		color: #222;
	}
	
	.main .tehui .toItem>div:nth-of-type(2)>div:nth-of-type(2) {
		font-size: 12px;
		color: #888888;
		text-align: left;
		margin-top: 10px;
	}
	
	.main .tehui .toItem>div:nth-of-type(2)>div:nth-of-type(3) {
		position: relative;
		margin-top: 10px;
	}
	
	.main .tehui .toItem>div:nth-of-type(2)>div:nth-of-type(3)>span:nth-of-type(1) {
		font-size: 17px;
		color: #FF6900;
	}
	
	.main .tehui .toItem>div:nth-of-type(2)>div:nth-of-type(3)>del {
		font-size: 12px;
		color: #888;
		margin-left: 5px;
	}
	
	.main .tehui .toItem>div:nth-of-type(2)>div:nth-of-type(3)>span:nth-of-type(2) {
		font-size: 13px;
		color: #888;
		position: absolute;
		right: 10px;
	}
</style>