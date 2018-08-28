<template>
    <div id="app">
        <div :style="{ fontSize : postFontSize + 'em' }">
            <head-nav title="我定义的标题名称" :isShow="true" v-on:enlarge-text="postFontSize += $event"></head-nav>
        </div>
        <head-nav title="这是另一个页面的标题" :isShow="false"></head-nav>
        <router-view/>
        <!--<font-awesome-icon :icon="['fab', 'font-awesome']"/>-->
    </div>
</template>
<script>
    import headNav from './components/header_nav.vue'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    export default {
        name: 'App',
        components:{
            headNav,
            FontAwesomeIcon,
        },
        data(){
            return{
                postFontSize: 1
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
