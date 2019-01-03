import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Page Components
import app from './components/index.vue'

//index
import index from './components/main/index'
import lunbo from './components/main/indexLunbo'
import tehui from './components/main/tehui'
import shouye from './components/main/shouye'
import input from './components/main/input'

import meishi from './components/main/meishi'
import maoyan from './components/main/listOne/maoyan'
import toWaimai from './components/main/listOne/toWaimai'

import huoguo from './components/main/like/huoguo'
import hualaishi from './components/main/like/hualaishi'
import zhengxin from './components/main/like/zhengxin'
import mianguan from './components/main/like/mianguan'

//waimai
import waimai from './components/waimai/waimai'
import wList from './components/waimai/list'
import xiaoliang from './components/waimai/xiaoliang'
import juli from './components/waimai/juli'
import shaixuan from './components/waimai/shaixuan'

//user
import user from "./components/user/user"

// Routes
const routes = [{
	path: '/',
	components: {
		default: app
	},
	redirect: "/index",
	children: [{
		path: "/index",
		components: {
			default: index
		},
		children: [{
			path: "/index",
			component: shouye,
			children: [{
				path: '/index',
				components: {
					default: lunbo,
					tehui: tehui
				},
				meta: {
					keepAlive: true
				}
			}]
		}, {
			path: '/waimai',
			component: waimai,
			children: [{
				path: '/waimai',
				components: {
					zonghe: wList,
					xiaoliang: xiaoliang,
					juli: juli,
					shaixuan: shaixuan
				}
			}]
		}, {
			path: '/user',
			component: user
		}]
	}, {
		path: "/meishi",
		components: {
			other: meishi
		}
	}, {
		path: '/toWaimai',
		components: {
			other: toWaimai
		},
		children: [{
			path: '/toWaimai',
			components: {
				zonghe: wList,
				xiaoliang: xiaoliang,
				juli: juli,
				shaixuan: shaixuan
			}
		}]
	}, {
		path: "/input",
		components: {
			other: input
		}
	}, {
		path: "/maoyan",
		components: {
			other: maoyan
		}
	}, {
		path: "/huoguo",
		components: {
			other: huoguo
		}
	}, {
		path: "/hualaishi",
		components: {
			other: hualaishi
		}
	}, {
		path: "/zhengxin",
		components: {
			other: zhengxin
		}
	}, {
		path: "/mianguan",
		components: {
			other: mianguan
		}
	}]
}]

Vue.use(Vonic.app, {
	routes: routes
})