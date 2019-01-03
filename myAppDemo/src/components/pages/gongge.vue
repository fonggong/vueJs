<template>
	<cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
</template>

<script>
	export default {
		data() {
			return {
				entrances: ['<div class="entrance"><span>特价日</span><br><span class="yellow">1元游泰国</span></div>',
					'<div class="entrance"><span>周四大牌</span><br><span class="red">1元游泰国</span></div>',
					'<div class="entrance"><span>免费拍</span><br><span class="calm">1元游泰国</span></div>',
					'<div class="entrance"><span>￥60红包</span><br><span class="dark">1元游泰国</span></div>',
					'<div class="entrance"><span>大片特惠</span><br><span class="positive">1元游泰国</span></div>',
					'<div class="entrance"><span>0元1元</span><br><span class="assertive">1元游泰国</span></div>'
				]
			}
		},
		methods:{
			onCellClick(){
				
			}
		}
	}
</script>

<style>
	.cells{
		margin: 5px 0;
	}
.cells .row{
	height: 130px;
}
.cells .row .entrance{
	padding: 10px;
}
.cells .row .entrance span:nth-of-type(1){
	font-size: 20px;
}
.cells .row .entrance span:nth-of-type(2){
	font-size: 14px;
	display: inline-block;
	padding-top: 5px;
}
.yellow{
	color: #FF6900;
}
.red{
	color: orchid;
}
</style>