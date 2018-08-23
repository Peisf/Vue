<template>
    <div id="Tabs">
        {{id}}
        <label for="">
            {{label}}
            <input v-bind="$attrs" v-bind:value="value" v-on:input="$emit('input',$event.target.value)">
        </label>
    </div>
</template>

<script>
    export default {
        inheritAttrs:false,
        props:['id','title','label','value'],
        name: "tabs"
    }
</script>

<style scoped>

</style>