<template>
    <div id="example">
        <div class="col"></div>
        <div id="example-1">
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{checked}}</label>
        </div>
        <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">Left</button>
            <button type="button" class="btn btn-default">Middle</button>
            <button type="button" class="btn btn-default">Right</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "formBind",
        data(){
            return{
                checked:false
            }
        }
    }
</script>

<style scoped>

</style>