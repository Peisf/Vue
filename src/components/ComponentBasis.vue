<template>
    <div id="Basis">
        <tab-nav v-bind="post"></tab-nav>
        <base-input v-model="username" class="username-input"
                    placeholder="Enter your username" v-on:focus.native="onFocus"></base-input>
        <span>{{username}}</span>
        <base-input v-model="username2" class="username-input"
                    placeholder="Enter your username2" v-on:focus.native="onFocus"></base-input>
        <span>{{username2}}</span>
        <base-checkbox v-model="lovingVue"></base-checkbox>
        <span>{{lovingVue}}</span>

    </div>
</template>

<script>
    import tabNav from './tabs.vue'
    import baseInput from './baseInput.vue'
    import baseCheckbox from './baseCheckbox.vue'
    export default {
        name: "ComponentBasis",
        components:{
            tabNav,
            baseInput,
            baseCheckbox
        },
        data(){
            return{
                post:{
                    id: 1,
                    title: 'My Journey with Vue'
                },
                username:'',
                username2:'',
                lovingVue:true
            }
        }
    }
</script>

<style scoped>

</style>