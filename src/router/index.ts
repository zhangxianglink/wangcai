import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Lables from '@/views/Lables.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/lables',
    name: 'Lables',
    component: Lables
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '*',
    component: NotFound
  }
  
]

const router = new VueRouter({
  routes
})

export default router
