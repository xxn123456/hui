import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'enter',
      component: () => import('./views/enter.vue')
    },
    {
      path: '/',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/redme',
          name: 'redme',
         
          component: r => require.ensure([], () => r(require('./docs/redme.md')))
        },
        {
          path: '/layout',
          name: 'layout',
         
          component: r => require.ensure([], () => r(require('./docs/layout.md')))
        },

        {
          path: '/button',
          name: 'button',
         
          component: r => require.ensure([], () => r(require('./docs/button.md')))
        },
        {
          path: '/input',
          name: 'input',
         
          component: r => require.ensure([], () => r(require('./docs/input.md')))
        },
        {
          path: '/timer',
          name: 'timer',
         
          component: r => require.ensure([], () => r(require('./docs/timer.md')))
        },
        {
          path: '/test',
          name: 'test',
         
          component: r => require.ensure([], () => r(require('./docs/test.md')))
        }
      ]
    }
  ]
})
