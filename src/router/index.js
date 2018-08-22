import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WatchExample from '@/components/WatchExample'
import ListRender from '@/components/ListRender'
import EventManage from '@/components/EventManage'
import formBind from '@/components/formBind'
import ComponentBasis from '@/components/ComponentBasis'


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
        },{
            path:'/eventManage',
            name:'EventManage',
            component:EventManage
        },{
            path:'/formBind',
            name:'formBind',
            component:formBind
        },{
            path:'/ComponentBasis',
            name:'ComponentBasis',
            component:ComponentBasis
        }
    ]
})
