<template>
	<div class="shaixuan">
		<div>
			<div>美团专达</div>
		</div>
		<div><span>商家特色(可多选)</span></div>
		<div>
			<div :style="{background: list.bg}" class="toList1" @click="toList1(index)" v-for="(list,index) in lists">
				<div>{{list.text}}</div>
			</div>

		</div>
		<div>人均价</div>
		<div>
			<div :style="{background: list.bg}" class="toList2" @click="toList2(index)" v-for="(list,index) in items">
				<div>{{list.text}}</div>
			</div>

		</div>
		<div>优惠活动（单选）</div>
		<div>
			<div @click="changeColor(index)" v-for="(item,index) in radios"><span :style="{background: item.bg}">{{item.tip}}</span><span :style="{color:item.color}">{{item.text}}</span></div>
		</div>
		<div class="btn">
			<div>清除筛选</div>
			<div id="badge">完成
				<badge v-if="show" :num="fg"></badge>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				lists: [{
						text: "免费配送",
						bg: "#FFFFFF"
					},
					{
						text: "0元起送",
						bg: "#FFFFFF"
					},
					{
						text: "新商家",
						bg: "#FFFFFF"
					},
					{
						text: "品牌商家",
						bg: "#FFFFFF"
					},
					{
						text: "货到付款",
						bg: "#FFFFFF"
					},
					{
						text: "跨天预订",
						bg: "#FFFFFF"
					},
					{
						text: "支持开发票",
						bg: "#FFFFFF"
					}
				],
				items: [{
						text: "20元以下",
						bg: "#FFFFFF"
					},
					{
						text: "20-40元",
						bg: "#FFFFFF"
					},
					{
						text: "40元以上",
						bg: "#FFFFFF"
					}
				],
				radios: [{
						bg: "#64ACE5",
						tip: "全",
						text: "优惠商家",
						color: "#888888"
					},
					{
						bg: "#FF5F59",
						tip: "减",
						text: "满减优惠",
						color: "#888888"
					},
					{
						bg: "#EFC0CC",
						tip: "领",
						text: "进店领券",
						color: "#888888"
					},
					{
						bg: "#FF5F59",
						tip: "半",
						text: "第二份半价",
						color: "#888888"
					},
					{
						bg: "#BE88D9",
						tip: "折",
						text: "折扣商品",
						color: "#888888"
					},
					{
						bg: "#64ACE5",
						tip: "赠",
						text: "满赠活动",
						color: "#888888"
					},
					{
						bg: "#BE88D9",
						tip: "新",
						text: "门店新客立减",
						color: "#888888"
					},
					{
						bg: "#FF5F59",
						tip: "赠",
						text: "买赠活动",
						color: "#888888"
					}
				],
				fg: 0,
				show: true,
				tp: 0
			}
		},
		mounted: function() {
			var badge = document.querySelector(".von-badge")
			if(this.fg == 0) {
				this.show = false
			} else {
				this.show = true
			}
		},
		methods: {
			toList1(index) {
				var list = document.getElementsByClassName("toList1");
				if(this.lists[index].bg == "#FFFFFF") {
					this.lists[index].bg = "#FFFBF0";
					list[index].style.border = "1px solid #FFD161";
					this.fg++;
				} else {
					this.lists[index].bg = "#FFFFFF";
					list[index].style.border = "1px solid #BBBBBB";
					this.fg--;
				}
				if(this.fg == 0) {
					this.show = false
				} else {
					this.show = true
				}
			},
			toList2(index) {
				var list = document.getElementsByClassName("toList2");
				if(this.items[index].bg == "#FFFFFF") {
					this.items[index].bg = "#FFFBF0";
					list[index].style.border = "1px solid #FFD161";
					this.fg++;
				} else {
					this.items[index].bg = "#FFFFFF";
					list[index].style.border = "1px solid #BBBBBB";
					this.fg--;
				}
				if(this.fg == 0) {
					this.show = false
				} else {
					this.show = true
				}
			},
			changeColor(index) {
				if(this.radios[index].color == "#888888") {
					for(var i = 0; i < this.radios.length; i++) {
						this.radios[i].color = "#888888"
					}
					this.radios[index].color = "#FFD161";
				} else {
					for(var i = 0; i < this.radios.length; i++) {
						this.radios[i].color = "#888888"
					}
				
				}
//			for(var j = 0; j < this.radios.length; j++) {
//				if(this.radios[j].color == "#FFD161"){
//					this.tp=1;
//					break;
//				}else{
//					this.tp=0
//				}
//			}
			this.fg=this.fg+this.tp
				if(this.fg == 0) {
					this.show = false
				} else {
					this.show = true
				}
			}
		}
	}
</script>

<style>
	.waimai .shaixuan {
		background: white;
	}
	
	.waimai .shaixuan>div:nth-of-type(1) {
		height: 60px;
		line-height: 60px;
		padding-left: 10px;
		border-bottom: 1px solid #BBBBBB;
		padding-top: 14px;
	}
	
	.waimai .shaixuan>div:nth-of-type(1)>div {
		font-size: 14px;
		color: #888888;
		height: 30px;
		width: calc(100% / 3 - 25px);
		border: 1px solid #BBBBBB;
		line-height: 30px;
		text-align: center;
	}
	
	.waimai .shaixuan>div:nth-of-type(2) {
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
	}
	
	.waimai .shaixuan>div:nth-of-type(2)>span {
		font-size: 13px;
		color: #BBBBBB;
	}
	
	.waimai .shaixuan>div:nth-of-type(3) {
		/*height: 140px;*/
		border-bottom: 1px solid #BBBBBB;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 10px;
	}
	
	.waimai .shaixuan>div:nth-of-type(4) {
		padding-left: 10px;
		font-size: 14px;
		color: #BBBBBB;
		margin: 10px 0;
	}
	
	.waimai .shaixuan>div:nth-of-type(5) {
		/*height: 140px;*/
		border-bottom: 1px solid #BBBBBB;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 10px;
	}
	
	.waimai .shaixuan>div:nth-of-type(3) .toList1 {
		height: 30px;
		width: calc(100% / 3 - 25px);
		border: 1px solid #BBBBBB;
		margin: 5px 12px;
		line-height: 30px;
		font-size: 14px;
		color: #888;
		text-align: center;
		text-decoration: none;
	}
	
	.waimai .shaixuan>div:nth-of-type(5) .toList2 {
		height: 30px;
		width: calc(100% / 3 - 25px);
		border: 1px solid #BBBBBB;
		margin: 5px 12px;
		line-height: 30px;
		font-size: 14px;
		color: #888;
		text-align: center;
	}
	
	.waimai .shaixuan .btn {
		height: 44px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		position: sticky;
		bottom: 0;
	}
	
	.waimai .shaixuan .btn>div:nth-of-type(1) {
		background: white;
		color: #484746;
		font-size: 18px;
		text-align: center;
		line-height: 44px;
		height: 100%;
		width: 50%;
		border-top: 1px solid #BBBBBB;
	}
	
	.waimai .shaixuan .btn>div:nth-of-type(2) {
		background: #FFD161;
		color: #484746;
		font-size: 18px;
		text-align: center;
		line-height: 44px;
		height: 100%;
		width: 50%;
	}
	
	.waimai .shaixuan>div:nth-of-type(6) {
		padding-left: 10px;
		font-size: 14px;
		color: #BBBBBB;
		margin: 10px 0;
	}
	
	.waimai .shaixuan>div:nth-of-type(7) {
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #BBBBBB;
	}
	
	.waimai .shaixuan>div:nth-of-type(7)>div {
		height: 40px;
		width: 50%;
		padding-left: 10px;
		line-height: 40px;
		text-align: left;
	}
	
	.waimai .shaixuan>div:nth-of-type(7)>div>span:nth-of-type(1) {
		font-size: 12px;
		color: white;
		padding: 1px 3px;
		margin-right: 6px;
	}
	
	.waimai .shaixuan>div:nth-of-type(7)>div>span:nth-of-type(2) {
		font-size: 14px;
	}
</style>