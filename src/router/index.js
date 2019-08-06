import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/index'
import login from '@/components/login'
import basic from '@/components/basic'
import basiczt from '@/components/basiczt'
import basicyg from '@/components/basicyg'
import basicgzb from '@/components/basicgzb'
import basicjcxx from '@/components/basicjcxx'
import basicztindex from '@/components/basicztindex'
import basicindex from '@/components/basicindex'
import basicygindex from '@/components/basicygindex'
import basicgzbindex from '@/components/basicgzbindex'
import basicjcxxindex from '@/components/basicjcxxindex'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'mainpage',
			component: mainpage
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/basic',
			name: 'basic',
			component: basic
		},
		{
			path: '/basiczt',
			name: 'basiczt',
			component: basiczt
		},
		{
			path: '/basicyg',
			name: 'basicyg',
			component: basicyg
		},
		{
			path: '/basicgzb',
			name: 'basicgzb',
			component: basicgzb
		},
		{
			path: '/basicjcxx',
			name: 'basicjcxx',
			component: basicjcxx
		},
		{
			path: '/basicztindex',
			name: 'basicztindex',
			component: basicztindex
		},
		{
			path: '/basicindex',
			name: 'basicindex',
			component: basicindex
		},
		{
			path: '/basicygindex',
			name: 'basicygindex',
			component: basicygindex
		},
		{
			path: '/basicgzbindex',
			name: 'basicgzbindex',
			component: basicgzbindex
		},
		{
			path: '/basicjcxxindex',
			name: 'basicjcxxindex',
			component: basicjcxxindex
		}
	]
})
