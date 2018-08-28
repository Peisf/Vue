<template>
    <input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change',$event.target.checked)">
</template>

<script>
    export default {
        name: "baseCheckbox",
        props:{
            checked:Boolean
        },
        model:{
            prop:'checked',
            event:'change'
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>