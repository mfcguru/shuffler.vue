import Vue from 'vue'
import VueRouter from 'vue-router'
import ShuffleComponent from '../../features/shuffle/shuffle.component'
import AboutComponent from '../../features/about/about.component'
import NotFoundComponent from '../../features/notfound/notfound.component'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shuffle',
    component: ShuffleComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
