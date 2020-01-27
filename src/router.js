import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router)

export default new Router({
  mode: 'history', //history mode de html

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/coin/:id', //:id son parametros dinamicos
      name: 'coin-detail',
      component: CoinDetail //componente
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
