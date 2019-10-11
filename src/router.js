import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import Encrypt from './views/Encrypt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/en',
      name: 'Encrypt',
      component: Encrypt
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
