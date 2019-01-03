<template>
	<div class="page waimai">
		<von-header theme="dark">
			<span @click="back" slot="left"><i class="icon ion-chevron-left"></i><span class="dongtai">返回</span></span>
			<span slot="title">美团外卖</span>
			<span slot='right'></i></span>
		</von-header>
           
		<scroll :on-refresh="onRefresh">
			<!--<div class="inp">
				<div><i class="icon ion-location"></i><span>莲花社区1区</span><i class="icon ion-chevron-right"></i></div>
				<div @click="toInput"><i  class="icon ion-search"></i><span>请输入商家或商品名</span></div>
			</div>-->
			<div class="wList">
				<router-link class="toList" :to="list.path" v-for="list in lists">
					<div :style='{background: list.bg}'><i :class="list.icon"></i></div>
					<div>{{list.name}}</div>
				</router-link>
			</div>
			<div class="fujin"><span>---</span>&ensp;附件商家&ensp;<span>---</span></div>
			<div class="zonghe">
				<div @click="zonghe"><span>综合排序</span><i class="icon ion-chevron-down"></i></div>
				<div @click="xiaoliang"><span>销量最高</span></div>
				<div @click="juli"><span>距离最近</span></div>
				<div @click="shaixuan"><span>|</span><span>筛选</span><i  class="icon ion-funnel"></i></div>
			</div>
			<!--list-->
			<router-view :name="name"></router-view>
		</scroll>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
            lists:[{path:"/index",name:"美食",icon:"icon ion-android-restaurant",bg:"#F77170"},
            {path:"/index",name:"快餐小吃",icon:"icon ion-beer",bg:"#7AD688"},
            {path:"/index",name:"汉堡披萨",icon:"icon ion-fork",bg:"#FDAF4A"},
            {path:"/index",name:"好吃不贵",icon:"icon ion-icecream",bg:"#FD6C6E"},
            {path:"/index",name:"下午茶",icon:"icon ion-coffee",bg:"#F079D7"},
            {path:"/index",name:"炸鸡热食",icon:"icon ion-android-train",bg:"#8F96E7"},
            {path:"/index",name:"暖胃粉面",icon:"icon ion-spoon",bg:"#79D784"},
            {path:"/index",name:"商超生鲜",icon:"icon ion-pizza",bg:"#77AEFE"},
            {path:"/index",name:"正餐优选",icon:"icon ion-wineglass",bg:"#F8B051"},
            {path:"/index",name:"一键下单",icon:"icon ion-calculator",bg:"#55D0DA"}],
            name:"zonghe"
             
			}
		},
//		mounted: function() {
//			document.addEventListener('scroll',this.sss)
//		
////             var scrollTop = this.$el.querySelector(".inp").scrollTop
////				var offsetTop = this.$el.querySelector(".inp").offsetTop;
//		},
//        mounted:function() {
//        	if (CSS.supports("position", "sticky") || CSS.supports("position", "-webkit-sticky")) {
//            console.log("兼容")
//}      	
//        },
		methods: {
			onRefresh(done) {
				setTimeout(done, 2000)
			},
			zonghe() {
				this.name="zonghe"
			},
			xiaoliang() {
				this.name="xiaoliang"
			},
			juli() {
				this.name="juli"
			},
			shaixuan() {
				this.name="shaixuan"
			},
			back() {
				this.$router.go(-1)
			},
			toInput() {
				this.$router.push("/input")
			},
		}

	}
</script>

<style>
	.waimai .scroll{
		margin-top: 44px;
	}
	.waimai .bar .buttons {
		font-size: 16px;
		z-index: 10;
	}
	
	.waimai .bar .buttons:nth-of-type(1) {
		width: 15%;
	}
	
	.waimai .bar .buttons:nth-of-type(2) {
		width: 8%;
	}
	
	.waimai .bar .buttons>span {
		padding: 3px 5px;
		position: relative;
	}
	
	.waimai .bar .buttons span .dongtai {
		position: absolute;
		width: 50px;
		top: 8px;
		left: 18px;
	}
	
	.waimai .bar .buttons .icon:nth-of-type(1) {
		font-size: 22px;
		margin-right: 3px;
		position: absolute;
		top: 8px;
	}
	
	
	.waimai .inp {
		height: 44px;
		width: 100%;
		background: #1B1A1F;
		padding: 0 10px;
		color: white;
		justify-content: space-between;
		align-items: center;
		position:sticky;
		position:-webkit-sticky;
		top:40px;
	/*	margin-top: 80px;*/
	}
	
	.waimai .inp>div:nth-of-type(2) {
		height: 70%;
		width: 55%;
		background: white;
		border-radius: 30px;
		position: relative;
	}
	
	.waimai .inp>div:nth-of-type(1) {
		width: 45%;
		height: 100%;
		line-height: 44px;
		font-size: 18px;
		position: relative;
	}
	.waimai .inp>div:nth-of-type(1)>span{
		position: absolute;
		color: white;
		left: 10%;
		top: 1px;
	}
	.waimai .inp>div:nth-of-type(1)>.icon:nth-of-type(1){
		position: absolute;
		left: 0;
		top: 2px;
		font-size: 24px;
		color: white;
	}
	.waimai .inp>div:nth-of-type(1)>.icon:nth-of-type(2){
		position: absolute;
		left: 120px;
		top: 1px;
		font-size: 18px;
		color: white;
		
	}
	.waimai .inp>div:nth-of-type(2)>.icon{
		font-size: 25px;
		position: absolute;
		left: 10px;
		top: -3px;
		height: 100%;
	}
	.waimai .inp>div:nth-of-type(2)>span{
		position: absolute;
		font-size: 16px;
		height: 100%;
		left: 32px;
		width: 80%;
		top: -3px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-right: 3px;
	}
	.waimai .wList{
		height: 180px;
		background: white;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: space-around;
	}
	.waimai .wList .toList{
		width: 20%;
		height: 50%;	
		text-decoration: none;
		text-align: center;
	}
	.waimai .wList .toList>div:nth-of-type(1){
		height: 50px;
		width: 50px;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		font-size: 40px;
		color: white;
		margin: auto;
		margin-top: 10px;
	}
	.waimai .wList .toList>div:nth-of-type(2){
		font-size: 16px;
		color: #484746;
		margin-top: 5px;
	}
	.waimai .fujin{
		height: 50px;
		line-height: 50px;
		width: 100%;
		font-size: 20px;
		font-family: "微软雅黑";
		font-weight: bold;
		text-align: center;
		background: white;
	}
	.waimai .fujin span{
		font-size: 18px;
		color: #888888;
	}
	.waimai .zonghe{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		background: white;
	}
	.waimai .zonghe>div{
		width: 25%;
		height: 100%;
		font-size: 16px;
		color: #888888;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid #bbb;
		border-top: 1px solid #bbb;
	}
	.waimai .zonghe>div:nth-of-type(1){
		position: relative;
		
	}
	.waimai .zonghe>div:nth-of-type(1) .icon{
		position: absolute;
		top: 3px;
		right: 0px;
	}
	.waimai .zonghe>div:nth-of-type(4){
		position: relative;
	}
	.waimai .zonghe>div:nth-of-type(4) .icon{
		margin-left: 3px;
	}
	.waimai .zonghe>div:nth-of-type(4)>span:nth-of-type(1){
		position: absolute;
		left: 0;
		color: #ddd;
	}
</style>