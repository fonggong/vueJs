<template>
	<div class="page fujin">
		<header class="header">
			<span @click='around'>康宁路108号</span>
			<div>
				<i class="icon ion-ios-search-strong"></i>
				<input type="text" placeholder="加勒比海盗5" />
			</div>
			<span>搜索</span>
		</header>
		<div class="page-content">
			<tabs tab-color="assertive" :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
			<swiper ref='swiper' :callback='callBack' width='100%' hide-pager='true' direction='horizontal' height="100%">
				<swiper-item>
					<div class="keyword">
						<span v-for='keyword in keywords'>{{keyword}}</span>
					</div>
				</swiper-item>
				<swiper-item>222</swiper-item>
				<swiper-item>333</swiper-item>
				<swiper-item>44</swiper-item>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: ["享美食", "住酒店", "爱玩乐", "全部"],
				tabIndex: 0,
				keywords: ['热门', '小吃快餐', '面包甜点', '江浙菜', '热门', '小吃快餐', '面包甜点', '江浙菜']
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			onTabClick(val) {
				this.tabIndex = val
				this.$refs.swiper.go(val)
			},
			callBack(val, newVal) {
				this.tabIndex = newVal;
			},
			around(){
				this.$router.push('/around')
			}
		}
	}
</script>

<style>
	.fujin {
		background: #F5F5F5;
	}
	
	.fujin .header {
		height: 44px;
		background: #06BFAB;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
	}
	
	.fujin .header>div {
		width: 65%;
		height: 60%;
		background: #FFFFFF;
		border-radius: 30px;
	}
	
	.fujin .header>span {
		color: #FFFFFF;
		font-size: 16px;
	}
	
	.fujin .header>span:nth-of-type(1) {
		display: inline-block;
		width: 20%;
		height: 60%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-top: 5px;
	}
	
	.fujin .header>div>input {
		font-size: 14px;
		color: #BBBBBB;
		display: inline-block;
		height: 100%;
		width: 80%;
		border: none;
		background: none;
		outline: medium;
	}
	
	.fujin .header>div>.ion-ios-search-strong {
		color: #bbb;
		font-size: 18px;
		margin-left: 10px;
	}
	
	.fujin .tabs {
		height: 44px;
		line-height: 43px;
	}
	
	.fujin .tabs .tab-item {
		color: #777777;
	}
	
	.fujin .swiper {
		padding-top: 70px;
	}
	
	.fujin .swiper .keyword {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 100px;
		align-items: center;
	}
	
	.fujin .keyword span {
		border: 1px solid #AAAAAA;
		background: #FFFFFF;
		border-radius: 15px;
		padding: 3px 10px;
		color: #888888;
		margin: 8px 10px;
	}
</style>