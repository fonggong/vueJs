<template>
	<div class="page meishi">
		<von-header theme="dark">
			<span @click="back" slot="left"><i class="icon ion-chevron-left"></i><span class="dongtai">返回</span></span>
			<span slot="title">美食</span>
			<span @click="actionSheet" slot='right'><i  class="icon ion-more"></i></span>
		</von-header>
		<scroll :on-refresh="onRefresh">
			<div class="shanghu">
				<i class="icon ion-chevron-left"></i>
				<div class="shang1">
					<div :class="sty1" @click="change1">商户</div>
					<div :class="sty2" @click="change2">闪惠团购</div>
				</div>
				<i class="icon ion-search"></i>
			</div>
			<div class="two">
				<accordion>
					<accordion-item title="全部商区" content-height="0">
						<div class="shaixuan">
							<p>商区</p>
							<p>沧浪区</p>
							<p>平江区</p>
							<p>工业园区</p>
							<p>高新区</p>
							<p>金阊区</p>
							<p>吴中区</p>
							<p>相城区</p>
							<p>昆山</p>
							<p>吴江</p>
							<p>张家港</p>
							<p>太仓</p>
							<p>常熟</p>
							<p>姑苏区</p>
							<p>甪直</p>
						</div>
					</accordion-item>
					<accordion-item title="美食" content-height="110">
						<div class="shaixuan">
							<p>美食</p>
							<p>日本菜</p>
							<p>苏州菜</p>
							<p>西餐</p>
							<p>面包甜点</p>
							<p>湘菜</p>
							<p>川菜</p>
						</div>
					</accordion-item>
					<accordion-item title="智能排序" content-height="110">
						<div class="shaixuan">
							<p>智能排序</p>
							<p>距离有先</p>
							<p>人气有先</p>
							<p>口味最佳</p>
							<p>好评有先</p>
							<p>服务最佳</p>
							<p>环境最佳</p>
							<p>高价有先</p>
						</div>
					</accordion-item>
				</accordion>

			</div>
			<div class="three">
				<router-link class="toItem" :to="item.path" v-for="item in items">
					<div :class='item.url'></div>
					<div>
						<div>{{item.name}}
							<span :style="{background: item.bg1}">{{item.tip1}}</span>
							<span :style="{background: item.bg2}" >{{item.tip2}}</span>
						</div>
						<div>
							<i class="icon ion-star"></i>
							<i class="icon ion-star"></i>
							<i class="icon ion-star"></i>
							<i class="icon ion-star"></i>
							<i class="icon ion-star"></i>
							<span>{{item.tiao}}</span>
							<span>￥{{item.price}}/人</span>
						</div>
						<div>
							<span>{{item.juli1}}</span>
							<span>{{item.juli2}}</span>
							<span>{{item.juli3}}</span>
						</div>
						<div>
							<span :style='{background: item.bg3}'>{{item.tip3}}</span>
							<span>{{item.quan}}</span>
							<i class="icon ion-chevron-right"></i>
						</div>
						<div>
							<span :style='{background: item.bg4}'>{{item.tip4}}</span>
							<span>{{item.tuan}}</span>
							<i class="icon ion-chevron-right"></i>
						</div>
					</div>
				</router-link>
			</div>
		</scroll>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				sty1: "sty1",
				sty2: "sty2",
				items: [{
					path: "/meishi",
					name: "一只很牛的羊",
					tip1: "外",
					bg1: "#47BABA",
					tiao: "85条",
					price: "42",
					juli1: "李公堤",
					juli2: "创意菜",
					juli3: "2.4km",
					tip3: "券",
					bg3: "#FAAC4D",
					bg4: "#F39457",
					quan: "43代50元",
					tip4: "团",
					tuan: "55元双人套餐",
					tip2:"券",
					bg2:"#FF6900",
					url:'bg1'
				},{
					path: "/meishi",
					name: "江南大院（香山里旗舰店）",
					tip1: "外",
					bg1: "#47BABA",
					tiao: "1715条",
					price: "98",
					juli1: "木渎地区",
					juli2: "苏帮菜",
					juli3: "23.9km",
					tip3: "券",
					bg3: "#FAAC4D",
					bg4: "#F39457",
					quan: "98代120元",
					tip4: "团",
					tuan: "728元 10-12人套",
					url:'bg2'
				},{
					path: "/meishi",
					name: "沁四访",
					tip1: "外",
					bg1: "#47BABA",
					tiao: "19条",
					price: "57",
					juli1: "景德路沿线",
					juli2: "湘菜",
					juli3: "12.8km",
					tip3: "券",
					bg3: "#FAAC4D",
					bg4: "#F39457",
					quan: "180代220元",
					tip4: "团",
					tuan: "199.9元实惠套餐",
					url:'bg3'
				},{
					path: "/meishi",
					name: "赵小姐的店（黄河店）",
					tip1: "外",
					bg1: "#47BABA",
					tiao: "330条",
					price: "81",
					juli1: "昆山其他",
					juli2: "小吃快餐",
					juli3: "24.1km",
					tip3: "券",
					bg3: "#FAAC4D",
					bg4: "#F39457",
					quan: "7.9代30元",
					tip4: "团",
					tuan: "7.9元 美人禅茶1份",
					tip2:"券",
					bg2:"#FF6900",
					url:'bg4'
				}]
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			onRefresh(done) {
				setTimeout(done, 1000)
			},
			change1() {
				this.sty1 = "sty1"
				this.sty2 = "sty2"
			},
			change2() {
				this.sty1 = "sty2"
				this.sty2 = "sty1"
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
	.meishi {
		z-index: 20;
	}
	
	.meishi .scroll {
		margin-top: 43px;
	}
	
	.meishi .scroll .two {
		height: 50px;
		position: relative;
	}
	
	.meishi .scroll .von-accordion .list {
		width: calc(100% / 3);
		float: left;
		height: 50px!important;
	}
	
	.meishi .scroll .von-accordion .list:nth-of-type(1) .accordion-content {
		position: absolute;
		left: 0;
		width: 300%;
		background: white;
		height: 300px;
		z-index: 100;
	}
	
	.meishi .scroll .von-accordion .list:nth-of-type(2) .accordion-content {
		position: absolute;
		right: -100%!important;
		width: 300%;
		background: white;
		height: 300px;
		z-index: 100;
	}
	.meishi .scroll .shaixuan{
		height: 100%;
		width: 100%;
		overflow: auto;
	}
	.meishi .scroll .shaixuan>p{
		font-size: 15px;
		border-bottom: 1px solid #BBBBBB;
		text-align: center;
		width: 50%;
		margin: auto;
		height: 30px;
		line-height: 30px;
	}
	.meishi .scroll .shaixuan>p:nth-of-type(1){
		font-size: 16px;color: #FF6900;
		border-bottom: 1px solid #FF6900;
	}
	
	.meishi .scroll .von-accordion .list:nth-of-type(3) .accordion-content {
		position: absolute;
		right: 0!important;
		width: 300%;
		background: white;
		height: 300px;
	}
	
	.meishi .bar .buttons {
		font-size: 16px;
		z-index: 10;
	}
	
	.meishi .bar .buttons:nth-of-type(1) {
		width: 15%;
	}
	
	.meishi .bar .buttons:nth-of-type(2) {
		width: 8%;
	}
	
	.meishi .bar .buttons>span {
		padding: 3px 5px;
		position: relative;
	}
	
	.meishi .bar .buttons span .dongtai {
		position: absolute;
		width: 50px;
		top: 6px;
		left: 18px;
	}
	
	.meishi .bar .buttons .icon:nth-of-type(1) {
		font-size: 22px;
		margin-right: 3px;
		position: absolute;
		top: 5px;
	}
	
	.meishi .scroll .shanghu {
		height: 40px;
		background: #f7f7f7;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 5px 10px;
	}
	
	.meishi .scroll .shanghu .shang1 {
		height: 90%;
		width: 144px;
		display: flex;
		justify-content: flex-start;
		border: 1px solid #FF6900;
		border-radius: 5px;
		z-index: 10;
	}
	
	.meishi .scroll .shanghu .icon {
		font-size: 20px;
		color: #FF6900;
		padding: 5px 6px;
	}
	
	.meishi .scroll .shanghu .shang1>div:nth-of-type(1) {
		height: 100%;
		width: 50%;
		font-size: 14px;
		text-align: center;
		line-height: 25px;
	}
	
	.meishi .scroll .shanghu .shang1>div:nth-of-type(2) {
		height: 100%;
		width: 50%;
		font-size: 14px;
		text-align: center;
		line-height: 25px;
	}
	
	.meishi .scroll .shanghu .shang1 .sty1 {
		background: #FF6900;
		color: white;
	}
	
	.meishi .scroll .shanghu .shang1 .sty2 {
		color: #333333;
	}
	
	.meishi .scroll .three {
		display: flex;
		flex-direction: column;
		clear: both;
	}
	
	.meishi .scroll .three .toItem {
		width: 100%!important;
		display: flex;
		justify-content: space-between;
		padding: 10px 0 10px 10px;
		background: white;
		text-decoration: none;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(1) {
		width: 80px;
		height: 80px;
		border: 1px solid #BBBBBB;
		background-size: cover;
	}
	.meishi .scroll .three .toItem .bg1{
		background-image: url(../../img/myang.jpg);
	}
	.meishi .scroll .three .toItem .bg2{
		background-image: url(../../img/mjiang.jpg);
	}
	.meishi .scroll .three .toItem .bg3{
		background-image: url(../../img/mqin.jpg);
	}
	.meishi .scroll .three .toItem .bg4{
		background-image: url(../../img/mzhao.jpg);
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2) {
		width: calc(100% - 80px);
		margin-left: 10px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(1) {
		font-size: 16px;
		color: #333333;
		height: 30px;
		line-height: 30px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(1) span {
		font-size: 12px;
		color: white;
		padding: 0px 2px;
		margin-left: 3px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(2) {
		height: 24px;
		line-height: 24px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(2) .icon {
		font-size: 13px;
		color: #FF6900;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(2) span {
		font-size: 13px;
		color: #888888;
		margin-left: 10px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(3) {
		height: 30px;
		font-size: 13px;
		color: #BBBBBB;
		border-bottom: 1px solid #CCCCCC;
		position: relative;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(3)>span:nth-of-type(2) {
		margin-left: 10px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(3)>span:nth-of-type(3) {
		position: absolute;
		right: 10px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(4) {
		height: 36px;
		line-height: 36px;
		position: relative;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(4)>span:nth-of-type(1) {
		font-size: 12px;
		color: white;
		padding: 0 2px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(4)>span:nth-of-type(2) {
		font-size: 13px;
		color: #888888;
		margin-left: 5px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(4) .icon {
		font-size: 14px;
		position: absolute;
		right: 10px;
		color: #BBBBBB;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(5) {
		height: 36px;
		line-height: 36px;
		border-top: 1px solid #CCCCCC;
		position: relative;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(5)>span:nth-of-type(1) {
		font-size: 12px;
		color: white;
		padding: 0 2px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(5)>span:nth-of-type(2) {
		font-size: 13px;
		color: #888888;
		margin-left: 5px;
	}
	
	.meishi .scroll .three .toItem>div:nth-of-type(2)>div:nth-of-type(5) .icon {
		font-size: 14px;
		position: absolute;
		right: 10px;
		color: #BBBBBB;
	}
</style>