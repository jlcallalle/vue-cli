import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',  //history mode de html

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})