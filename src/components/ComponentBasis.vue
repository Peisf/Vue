<template>
    <div id="Basis">
        <tab-nav v-bind="post"></tab-nav>
    </div>
</template>

<script>
    import tabNav from './tabs.vue'
    export default {
        name: "ComponentBasis",
        components:{
            tabNav
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