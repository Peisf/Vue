<template>
    <div id="Slot">
        <navigation-link url="/profile">
            <span class="fa fa-address-book"></span>
            Your Profile
        </navigation-link>
        <font-awesome-icon :icon="['fab', 'font-awesome']"></font-awesome-icon>
        <navigation-link url="">
            Your Profile
            <slot slot="button">Delete</slot>
            Logged in as {{ user.name }}
        </navigation-link>
        <base-layout>
            <!--<template slot="header">
                <h1>Here might be a page title</h1>
            </template>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
            <template slot="footer">
                <p>Here's some contact info.</p>
            </template>-->
            <h1 slot="header">
                Here might be a page title
            </h1>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
            <p slot="footer">
                Here's some contact info.
            </p>
        </base-layout>
        <h3>这里是父组件</h3>
        <todo-list v-bind:todos="todos">
            <template slot-scope="{ todo }">
                {{ todo.text }}
            </template>
        </todo-list>
        <todo-list v-bind:todos="todos">
            <template slot-scope="{ todo }">
                {{ todo.name }}
            </template>
        </todo-list>
    </div>
</template>

<script>
    import navigationLink from './navigationLink.vue'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import baseLayout from './baseLayout'
    import todoList from './todoList'
    export default {
        name: "SlotDemo",
        components:{
            navigationLink,
            FontAwesomeIcon,
            baseLayout,
            todoList
        },
        data(){
            return{
                user:{
                    name:'Doe'
                },
                todos:[
                    {text:'Jone'},
                    {text:'Doe'},
                    {text:'Jack'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>