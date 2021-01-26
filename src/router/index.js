import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NYTLogin from '../views/NYTLogin.vue'
import Authenticated from '../views/Authenticated.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nyt-login',
    name: 'NYTLogin',
    component: NYTLogin
  },
  {
    path: '/authenticated',
    name: 'Authenticated',
    component: Authenticated
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router