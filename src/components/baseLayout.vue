<template>
    <div class="container">
        <header>
            <!--页头-->
            <slot name="header"></slot>
        </header>
        <main>
            <!--内容-->
            <slot></slot>
        </main>
        <footer>
            <!--页脚-->
            <slot name="footer"></slot>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "baseLayout"
    }
</script>

<style scoped>

</style>