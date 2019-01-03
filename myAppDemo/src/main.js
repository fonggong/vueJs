import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Page Components
import Index from './components/Index.vue'
import app from './components/app.vue'

//pages
import home from './components/pages/home.vue'
import fujin from './components/pages/fujin.vue'
import user from './components/pages/user.vue'
import guang from './components/pages/guang.vue'
import dingdan from './components/pages/dingdan.vue'

import lunbo from './components/pages/lunbo.vue'
import gongge from './components/pages/gongge.vue'

import meishi from './components/pages/meishi.vue'
import search from './components/pages/search.vue'
import around from './components/pages/around.vue'

// Routes
const routes = [{
	path: '/',
	component: app,
	redirect: '/index/home',
	children: [{
			path: 'index/home',
			components: {
				default:Index
			},
			children: [{
				path: '/index/home',
				component: home,
				children: [{
					path: '/index/home',
					components: {
						lunbo: lunbo,
						gongge: gongge
					}
				}]
			}, {
				path: '/index/fujin',
				component: fujin
			}, {
				path: "/index/guang",
				component: guang
			}, {
				path: '/index/dingdan',
				component: dingdan
			}, {
				path: '/index/user',
				component: user
			}]
		},{
			path: "/meishi",
			components:{
				other:meishi
			}
		},
		{
			path:"/search",
			components:{
				other:search
			}
		},{
			path:"/around",
			components:{
				other:around
			}
		}
	]
}]

Vue.use(Vonic.app, {
	routes: routes
})