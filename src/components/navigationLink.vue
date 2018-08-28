<template>
    <div class="container">
        <a v-bind:href="url" class="nav-link">
            <slot></slot>
        </a>
        <button type="submit">
            <slot name="button">Submit</slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "navigationLink",
        data(){
            return{
                url:""
            }
        }
    }
</script>

<style scoped>

</style>