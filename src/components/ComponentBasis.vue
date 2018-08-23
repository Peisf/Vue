<template>
    <div id="Basis">
        <tab-nav v-bind="post"></tab-nav>
        <base-input v-model="username" class="username-input" placeholder="Enter your username"></base-input>
    </div>
</template>

<script>
    import tabNav from './tabs.vue'
    import baseInput from './tabs.vue'
    export default {
        name: "ComponentBasis",
        components:{
            tabNav,
            baseInput
        },
        data(){
            return{
                post:{
                    id: 1,
                    title: 'My Journey with Vue'
                }
            }
        }
    }
</script>

<style scoped>

</style>