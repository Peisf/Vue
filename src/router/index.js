import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WatchExample from '@/components/WatchExample'
import ListRender from '@/components/ListRender'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/watchExample',
      name:'WatchExample',
      component: WatchExample
    },{
      path:'/listRender',
      name:'ListRender',
      component:ListRender
    }
  ]
})
