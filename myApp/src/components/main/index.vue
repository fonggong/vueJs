<template>
	<div class="page main" v-tabbar="{menus:menus,menuColor: '#B5B5B5', activeMenuColor: '#44CC00', onMenuClick: menuClicked}">
		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				menus: [{
						iconOn: 'ion-ios-home',
						iconOff: 'ion-ios-home-outline',
						text: '首页',
						path: '/index'
					},
					{
						iconOn: 'ion-android-boat',
						iconOff: 'ion-android-boat',
						text: '外卖',
						path: '/waimai'
					}, {
						iconOn: 'ion-ios-person',
						iconOff: 'ion-ios-person-outline',
						text: '我的',
						path: '/user'
					}
				]
			}
		},
		methods:{
			menuClicked() {

			}
		}
	}
</script>

<style>
	
	
	.tabbar {
		height: 52px;
		line-height: 56px;
		box-shadow: none;
		border-top: 1px solid #BBBBBB;
	}
	
	.tabbar .tabbar-item .icon-wrapper {
		font-size: 30px;
	}
	
	.tabbar .tabbar-item .text-wrapper {
		font-size: 25px;
		line-height: 24px;
	}
	
	</style>