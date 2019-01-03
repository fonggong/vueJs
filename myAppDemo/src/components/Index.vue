<template>
  <div class="page" v-tabbar="{menus:menus,menuColor: '#777', activeMenuColor: '#06bfab', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        menus:[{
        	iconOn:"ion-ios-home",
        	iconOff:"ion-ios-home-outline",
        	text:"首页",
        	path:'/index/home'
        },
        {
        	iconOn:"ion-ios-location",
        	iconOff:"ion-ios-location-outline",
        	text:"附近",
        	path:'/index/fujin'
        },{
        	iconOn:"ion-ios-analytics",
        	iconOff:"ion-ios-analytics-outline",
        	text:"逛一逛",
        	path:'/index/guang'
        },{
        	iconOn:"ion-ios-list",
        	iconOff:"ion-ios-list-outline",
        	text:"定单",
        	path:'/index/dingdan',
        	badge:"4"
        },{
        	iconOn:"ion-ios-person",
        	iconOff:"ion-ios-person-outline",
        	text:"我的",
        	path:'/index/user'
        }]
      }
    },
    methods:{
    	menuClicked(){
    		
    	}
    }
  }
</script>
<style>
 
</style>
