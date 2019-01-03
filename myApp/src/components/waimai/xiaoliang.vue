<template>
	<div class="xiaoL">
		<router-link class="details" :to="item.path" v-for='item in items'>
			<div :class='item.url'><span>品牌</span></div>
			<div>
				<div>{{item.name}}</div>
				<div>
					<i class="icon ion-star"></i>
					<i class="icon ion-star"></i>
					<i class="icon ion-star"></i>
					<i class="icon ion-star"></i>
					<i class="icon ion-star"></i>
					<span>{{item.ping}}</span>
					<span>月销{{item.yuexiao}}</span>
					<span>{{item.time}}<span class="shu">|</span>{{item.juli}}</span>
				</div>
				<div>
					<span>起送￥{{item.qisong}}</span> <span class="shu">|</span><span>{{item.peisong}}</span><span class="shu">|</span><span>人均￥{{item.renjun}}</span>
				</div>
				<div>
					<span> <i class="icon ion-playstation"></i> {{item.dazhong}}</span>
				</div>
				<div>
					<span :style='{background: item.bg}'>{{item.zhejian}}</span>
					<span>{{item.zheTip}}</span>
				</div>
				<div>
					<span>票</span>
					<span>{{item.piao}}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				items: [{
						path: "/index",
						name: "肯德基宅急送（苏州工园区星塘街店)",
						ping: "4.8",
						yuexiao: "750",
						juli: "2.1km",
						time: "40分钟",
						qisong: "0",
						peisong: '9',
						renjun: "36",
						dazhong: "大众点评高分店铺",
						zhejian: "折",
						bg: "#CE7FE4",
						zheTip: "折扣商品5折起",
						piao: "本店支持开发票，开票金额0元起",
						url: 'one'
					},
					{
						path: "/index",
						name: "黄焖鸡米饭",
						ping: "4.8",
						yuexiao: "750",
						juli: "2.1km",
						time: "40分钟",
						qisong: "0",
						peisong: '9',
						renjun: "36",
						dazhong: "大众点评高分店铺",
						zhejian: "减",
						bg: "#F26959",
						zheTip: "折扣商品5折起",
						piao: "本店支持开发票，开票金额0元起",
						url: 'two'
					},
					{
						path: "/index",
						name: "华联超市（文星店）",
						ping: "4.8",
						yuexiao: "750",
						juli: "2.1km",
						time: "40分钟",
						qisong: "0",
						peisong: '9',
						renjun: "36",
						dazhong: "大众点评高分店铺",
						zhejian: "减",
						bg: "#F26959",
						zheTip: "折扣商品5折起",
						piao: "本店支持开发票，开票金额0元起",
						url: 'three'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.waimai .xiaoL {
		display: flex;
		flex-direction: column;
		padding: 10px;
		background: white;
	}
	
	.waimai .xiaoL>.details {
		height: 180px;
		display: flex;
		justify-content: space-between;
		text-decoration: none;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(1) {
		width: 100px;
		height: 90px;
		position: relative;
		border: 1px solid #BBBBBB;
		background-size: cover;
	}
	
	.waimai .xiaoL>.details .one {
		background-image: url(../../img/wken1.jpg);
	}
	
	.waimai .xiaoL>.details .two {
		background-image: url(../../img/whuang1.jpg);
	}
	
	.waimai .xiaoL>.details .three {
		background-image: url(../../img/whua1.jpg);
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(1)>span {
		position: absolute;
		background: #FEB429;
		color: #888888;
		font-size: 12px;
		top: 0;
		right: 0;
		z-index: 10;
		padding: 1px 4px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2) {
		width: calc(100% - 100px);
		height: 100%;
		margin-left: 10px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(1) {
		width: 70%;
		height: 28px;
		line-height: 28px;
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 16px;
		color: #484746;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(2) {
		position: relative;
		height: 20px;
		line-height: 20px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(2)>.icon {
		font-size: 13px;
		color: #FED382;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(1) {
		font-size: 12px;
		margin-right: 10px;
		color: #888888;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(2) {
		font-size: 12px;
		color: #888888;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(3) {
		position: absolute;
		right: 0;
		font-size: 12px;
		color: #888888;
	}
	
	.waimai .xiaoL>.details .shu {
		font-size: 4px;
		padding: 0 4px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(3) {
		font-size: 12px;
		height: 28px;
		line-height: 28px;
		color: #888888;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(4)>span:nth-of-type(1) {
		font-size: 12px;
		border: 1px solid #BBBBBB;
		color: #888888;
		padding: 1px 4px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(4) .icon {
		color: #FED382;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(5) {
		height: 28px;
		line-height: 28px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(5)>span:nth-of-type(1) {
		font-size: 12px;
		padding: 1px 3px;
		color: white;
		margin-right: 5px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(5)>span:nth-of-type(2) {
		color: #888888;
		font-size: 13px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(6) {
		height: 28px;
		line-height: 28px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(6)>span:nth-of-type(1) {
		font-size: 12px;
		padding: 1px 3px;
		border: 1px solid cornflowerblue;
		color: cornflowerblue;
		margin-right: 5px;
	}
	
	.waimai .xiaoL>.details>div:nth-of-type(2)>div:nth-of-type(6)>span:nth-of-type(2) {
		font-size: 13px;
		color: #888888;
	}
</style>