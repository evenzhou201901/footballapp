import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fixtures',
      name: 'fixtures',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "fixtures" */ './views/Fixtures.vue')
    },
    {
      path:'/standings',
      name: 'standings',
      component: () => import(/* webpackChunkName: "standings" */ './views/Standings.vue')
     
    },
    {
      path:'/squads',
      name: 'squads',
      component: () => import(/* webpackChunkName: "squads" */ './views/Squads.vue')
     
    },
    {
      path: '/teams',
      name: 'teams',
      component: ()=>import(/* webpackChunkName: "teams" */  './views/Teams.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: ()=>import(/* webpackChunkName: "history" */  './views/History.vue')
    },
    {
      path: '/chatRoom',
      name: 'chatRoom',
      component: ()=>import(/* webpackChunkName: "chatRoom" */  './views/ChatRoom.vue')
    },
    {
      path: '/roster',
      name: 'roster',
      component: ()=>import(/* webpackChunkName: "Roster" */  './views/Roster.vue')
    }
  ]
})
