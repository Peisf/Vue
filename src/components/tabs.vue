<template>
    <div id="Tabs">
        {{id}}.{{title}}

    </div>
</template>

<script>
    export default {
        name: "tabs",
        inheritAttrs:false,
        props:['id','title'],
    }
</script>

<style scoped>

</style>