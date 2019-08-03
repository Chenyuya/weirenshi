import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/index'
import login from '@/components/login'
import basic from '@/components/basic'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
		}
  ]
})
