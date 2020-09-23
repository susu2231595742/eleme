import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Cart from '../views/Cart.vue'
import User from '../views/User.vue'
import NewLogin from '../views/NewLogin.vue'
import ShopInfo from '../views/ShopInfo.vue'



Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component:  Cart
    },
    {
      path: '/User',
      name: 'user',
      component: User
    },
    {
      path: '/NewLogin',
      name: 'NewLogin',
      component: NewLogin,
    },
    {
      path: '/ShopInfo',
      name: 'ShopInfo',
      component: ShopInfo
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
