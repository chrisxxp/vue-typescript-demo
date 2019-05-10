import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
            component: () => import('../views/home.vue')
        }, {
            path: '/item',
            component: () => import('../views/item.vue')
        }, {
            path: '/score',
            component: () => import('../views/score.vue')
        }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  ]
})
