<template>
	<div class="page hualaishi">
		<von-header theme="dark">
			<span @click="back" slot="left"><i class="icon ion-chevron-left"></i><span class="dongtai">返回</span></span>
			<span slot="title">华莱士炸鸡汉堡（观前街店）</span>
			<span slot='right'></i></span>
		</von-header>
		<scroll :on-refresh="onRefresh">
			<swiper ref="swiperl" direction="horizontal" width="100%" height="200" pager-color="#ea5a49" pager-bg-color="#e5e4e3" hide-pager="true">
				<swiper-item><div>
					<div>{{text}}</div>
					<div>{{details}}</div>
				</div></swiper-item>
				<swiper-item><div>
					<div>{{text}}</div>
					<div>{{details}}</div>
				</div></swiper-item>
				<swiper-item><div>
					<div>{{text}}</div>
					<div>{{details}}</div>
				</div></swiper-item>
			</swiper>
			<div class="goumai">
			<div><span>￥11</span>
				<del>￥21</del>
			</div>
			<div>立即购买</div>
			</div>
			
			<div class="zidong">
				<div> 
					<button></button>
					<span> 随时可退</span></div>
				<div>
					<button></button>
					<span>过期自动退</span></div>
			</div>
			<div class="shang">
			<div><span>适用商户（123）</span><i class="icon ion-chevron-right"></i></div>
			<div>
				<div>
					<div>华莱士炸鸡汉堡（观前街店）</div>
					<div><span><i  class="icon ion-star"></i><i  class="icon ion-star"></i><i  class="icon ion-star"></i><i  class="icon ion-star"></i><i  class="icon ion-star"></i></span>
						<span>2.0km</span>
					</div>
				</div>
				<div><i class="icon ion-iphone"></i></div>
			</div>
			</div>
			<div class="weizhi">
				<i class="icon ion-location"></i>
				<span>苏州观前街人民大厦01幢12号</span>
			</div>
			<div class="xiang">
				<div>
					<span>团购详情</span>
					<i class="icon ion-printer"></i>
				</div>
				<div>
					套餐
				</div>
				<div>
					<div>香辣鸡腿堡</div>
					<div><span>1份</span>
					<span>10元</span></div>
				</div>
				<div>
					<div>
					<del>最高价值</del>
					<del>21元</del>
					</div>
					<div>
						<span>团购价</span>
						<span>11元</span>
					</div>
					<div>免费提供餐巾纸</div>
					<div>可与店内其他优惠同享</div>
				</div>
			</div>
			<div class="gengduo">
				<div><span>更多图文详情</span>
				<span>（建议WiFi环境下打开，土豪随意）</span></div>
				<i class="icon ion-chevron-right"></i>
			</div>
			<div class="xvzhi">
				<div>
					购买须知<i  class="icon ion-volume-low"></i>
				</div>
				<div>
					<div class="qing">有效期</div>
					<div class="zhong">2017-10-27至2018-09-23</div>
				</div>
				<div>
					<div class="qing">除外日期</div>
					<div class="zhong">有效期内周末、法定节日可用</div>
				</div>
				<div>
				<div class="qing">使用时间</div>
				<div class="zhong">团购券使用时间：11:00-22:30，SM店营业时间11:00-21:30</div>
				</div>
				<div>
				<div class="qing">预约提醒</div>
				<div class="zhong">无需预约，消费高峰时可能需要等位</div>
				</div>
				<div>
					<div class="qing">规则提醒</div>
					<div class="zhong">每张最多使用1张团购券</div>
					<div class="zhong">每张团购券建议1人使用</div>
				</div>
				<div>
					<div class="qing">包间</div>
					<div class="zhong">不可使用包间</div>
				</div>
				<div>
					<div class="qing">堂食外带</div>
					<div class="zhong">仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情咨询商家</div>
				</div>
				<div>
					<div class="qing">温馨提示</div>
					<div class="zhong">团购用户可以享受店内其他所有优惠</div>
					<div class="zhong">酒水饮料等问题，请致电商家咨询，以商家反馈为准</div>
					<div class="zhong">如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜替换，具体事宜请与店内写上</div>
				</div>
				<div class="chu">
					<div class="qing">商家服务</div>
					<div class="zhong">提供免费WiFi</div>
					<div class="zhong">停车收费标准：免费停车（观前街不提供停车位）</div>
				</div>
			</div>
			<div class="but">
				<ul>
					<li>首页</li>
					<li>我的点评团</li>
					<li>客户端</li>
				</ul>
				<ul>
					<li>电脑版</li>
					<li>大众点评网</li>
					<li>意见反馈</li>
				</ul>
				<p>
					<a href="#">copyright 2014 dlanping.com</a>
				</p>
			</div>
		</scroll>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
                text:"四川香天下火锅",
                details:"仅售3.9元！价值21元的红糖糍粑1份，提供免费WiFi。"
			}
		},
		methods: {
			onRefresh(done) {
				setTimeout(done, 1000)
			},
			back() {
				this.$router.go(-1)
			}
		},
		mounted: function() {
			var fg = 0;
			this.interval = setInterval(function() {
				fg++;
				if(fg == 3) {
					fg = 0
				}
				this.$refs.swiperl.go(fg);
			}.bind(this), 3000)
			
		},
		beforeDestroy: function() {
			//console.log(this.$refs.swiper)
			clearInterval(this.interval)

		}
	}
</script>

<style>
	.hualaishi{
		z-index: 20;
	}
	.hualaishi .scroll {
		margin-top: 43px;
	}
	.hualaishi .swiper .swiper-item>div{
		height: 45px;
		width: 100%;
		background: #BBBBBB;
		opacity: 0.8;
		position: absolute;
		padding-left: 10px;
		bottom: 0;
	}
	.hualaishi .swiper .swiper-item>div>div:nth-of-type(1){
		color: white;
		font-size: 16px;
	}
	.hualaishi .swiper .swiper-item>div>div:nth-of-type(2){
		color: white;
		font-size: 13px;
	}
	.hualaishi .swiper .swiper-item:nth-of-type(1) {
		background: url(../../../img/hua1.jpg)no-repeat;
		background-size: cover;
	}
	.hualaishi .swiper .swiper-item:nth-of-type(2) {
		background: url(../../../img/hua2.jpg)no-repeat;
		background-size: cover;
	}
	.hualaishi .swiper .swiper-item:nth-of-type(3) {
		background: url(../../../img/hua3.jpg)no-repeat;
		background-size: cover;
	}
	
	.hualaishi .bar .title {
		width: 50%;
		margin: auto;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.hualaishi .bar .buttons {
		font-size: 16px;
		z-index: 10;
	}
	
	.hualaishi .bar .buttons:nth-of-type(1) {
		width: 15%;
	}
	
	.hualaishi .bar .buttons:nth-of-type(2) {
		width: 8%;
	}
	
	.hualaishi .bar .buttons>span {
		padding: 3px 5px;
		position: relative;
	}
	
	.hualaishi .bar .buttons span .dongtai {
		position: absolute;
		width: 50px;
		top: 8px;
		left: 18px;
	}
	
	.hualaishi .bar .buttons .icon:nth-of-type(1) {
		font-size: 20px;
		margin-right: 3px;
		position: absolute;
		top: 8px;
	}
	.hualaishi .goumai{
		display: flex;
		justify-content: space-between;
		padding: 10px 10px;
		background: white;
		height: 50px;
		border-bottom: 1px solid #BBBBBB;
	}
	.hualaishi .goumai>div:nth-of-type(1){
		height: 100%;
		line-height: 29px;
	}
	.hualaishi .goumai>div:nth-of-type(1)>span{
		font-size: 20px;
		color: #FF6900;
	}
	.hualaishi .goumai>div:nth-of-type(1)>del{
		font-size: 13px;
		color: |#BBBBBB;
		margin-left: 10px;
	}
	.hualaishi .goumai>div:nth-of-type(2){
		font-size: 18px;
		background: #FF6900;
		color: white;
		padding:5px 20px;
		border-radius: 5px;
	}
	.hualaishi .zidong{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		border-bottom: 1px solid #BBBBBB;
		
		height: 40px;
	}
	.hualaishi .zidong>div{
		width: 50%;
		padding-left: 10px;
		font-size: 13px;
		color: #888;
		position: relative;
		height: 100%;
	}
	.hualaishi .zidong>div>button{
		width: 16px;
		height: 16px;
		background: #ADFF2F;
		border: none;
		outline: medium;
		border-radius: 50%;
		position: absolute;
		top: 12px;
	}
	.hualaishi .zidong>div>span{
		position: absolute;
		left: 30px;
		top: 10px;
	}
	.hualaishi .shang{
		padding-left: 10px;
		background: white;
		font-size: 16px;
		margin-top: 18px;
		border-bottom: 1px solid #BBBBBB;
	}
	.hualaishi .shang>div:nth-of-type(1) {
		display: flex;
		justify-content: space-between;
		padding: 10px 10px 10px 0;
		color: #888888;
		border-bottom: 1px solid #BBBBBB;
	}
	.hualaishi .shang>div:nth-of-type(2){
		display: flex;
		justify-content: space-between;
		height: 100px;
	}
	.hualaishi .shang>div:nth-of-type(2)>div:nth-of-type(2){
		width: 20%;
		height: 80px;
		margin: 10px;
		text-align: center;
		line-height: 80px;
		font-size: 40px;
		color: #FF6900;
		border-left: 1px solid #BBBBBB;
	}
	.hualaishi .shang>div:nth-of-type(2)>div:nth-of-type(1){
		width: 80%;
	}
	.hualaishi .shang>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1){
		font-size: 20px;
		height: 50%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		line-height: 50px;
		color: #444444;
	}
	.hualaishi .shang>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2){
		line-height: 50px;
		position: relative;
	}
	.hualaishi .shang>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2) .icon{
		font-size: 13px;color: #FF6900;
	}
	.hualaishi .shang>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(2){
		position: absolute;
		right: 5px;
		font-size: 13px;color: #888888;
	}
	.hualaishi .weizhi{
		height: 40px;
		line-height: 40px;
		background: white;
		padding-left: 10px;
		font-size: 14px;
		color: #444444;
		border-bottom: 1px solid #BBBBBB;
	}
	.hualaishi .weizhi .icon{
		font-size: 18px;
		color: #BBBBBB;
		margin-right: 5px;
	}
	.hualaishi .xiang{
		height: 270px;
		background: white;
		border-bottom: 1px solid #BBBBBB;
		padding-left: 10px;
		margin-top: 10px;
	}
	.hualaishi .xiang>div:nth-of-type(1){
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #333;
		border-bottom: 1px solid #CCCCCC;
	}
	.hualaishi .xiang>div:nth-of-type(1) .icon{
	color: #888888;
	margin-left: 5px;
	}
	.hualaishi .xiang>div:nth-of-type(2){
		font-size: 16px;
		color: #888888;
		height: 50px;
		border-bottom: 1px solid #CCCCCC;
		text-align: center;
		line-height: 60px;
	}
	.hualaishi .xiang>div:nth-of-type(3){
		height: 40px;
		border-bottom: 1px solid #CCCCCC;
		display: flex;
		justify-content: space-between;
		line-height: 40px;
	}
	.hualaishi .xiang>div:nth-of-type(3)>div:nth-of-type(1){
		height: 100%;
		font-size: 16px;color: #333333;
		width: 50%;
	}
	.hualaishi .xiang>div:nth-of-type(3)>div:nth-of-type(2){
		width: 50%;
		height: 100%;
		text-align: right;
		color: #333333;
	}
	.hualaishi .xiang>div:nth-of-type(3)>div:nth-of-type(2)>span{
		margin-right: 10px;
	}
	.hualaishi .xiang>div:nth-of-type(4)>div:nth-of-type(1){
		text-align: right;
		margin: 10px;
	}
	.hualaishi .xiang>div:nth-of-type(4)>div:nth-of-type(1)>del{
		font-size: 16px;
		color: #888888;
		margin-right: 10px;
	}
	.hualaishi .xiang>div:nth-of-type(4)>div:nth-of-type(2){
		text-align: right;
		margin: 10px;
		color: #FF6900;
		font-size: 16px;
	}
	.hualaishi .xiang>div:nth-of-type(4)>div:nth-of-type(2)>span{
		margin-right: 10px;
	}
	.hualaishi .xiang>div:nth-of-type(4)>div:nth-of-type(3){
		font-size: 15px;
		color: #333333;
		margin: 10px;
	}
	.hualaishi .xiang>div:nth-of-type(4)>div:nth-of-type(4){
		font-size: 15px;
		color: #333333;
		margin: 10px;
	}
	.hualaishi .gengduo{
		height: 50px;
		background: white;
		border-bottom: 1px solid #BBBBBB;
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		line-height: 50px;
	}
	.hualaishi .gengduo>div:nth-of-type(1){
		font-size: 16px;color: #333333;
	}
	.hualaishi .gengduo>div:nth-of-type(1)>span:nth-of-type(2){
		font-size: 12px;
		color: #888;
	}
	.hualaishi .gengduo .icon{
		font-size: 18px;
		color: #888888;
	}
	.hualaishi .xvzhi{
		background: white;
		padding-left: 12px;
		margin-top: 10px;
		border-bottom: 1px solid #BBBBBB;
	}
	.hualaishi .xvzhi>div{
		border-bottom: 1px solid #CCCCCC;
	}
	.hualaishi .xvzhi>div>.qing{
		font-size: 15px;
		color: #888888;
		margin: 10px 0;
	}
	.hualaishi .xvzhi>div>.zhong{
		font-size: 15px;
		color: #333;
		margin: 10px 0;
		width: 90%;
		position: relative;
	}
	.hualaishi .xvzhi .chu{
		border-bottom: none;
	}
	.hualaishi .xvzhi>div>.zhong:before{
		content: "·";
		font-size: 40px;
		position: absolute;
		top: -3px;
		left: -12px;
		color: #888888;
	}
	.hualaishi .xvzhi>div:nth-of-type(1){
		font-size: 15px;
		color: #333;
		padding: 10px 0;
		width: 100%;
		position: relative;
	}
	.hualaishi .xvzhi>div:nth-of-type(1) .icon{
		font-size: 20px;
		position: absolute;
		left: 65px;
		top: 12px;
		color: #BBBBBB;
	}
	.hualaishi .but{
		height: 120px;
		margin-top: 20px;
		position: relative;
	}
	.hualaishi .but>ul{
		height: 30px;
		line-height: 30px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hualaishi .but>ul>li{
		margin: 0 10px;
		width: 70px;
		text-align: center;
		font-size: 14px;color: #999999;
	}
	.hualaishi .but p{
		text-align: center;
		position: absolute;
		width: 100%;
		bottom: 0;
		font-size: 13px;color: #999999;
	}
	.hualaishi .but p>a{
		text-decoration: none;
		color: #999999;
	}
</style>