<template>
    <label for="baseInput">
        {{label}}
        <input id="baseInput" v-bind="$attrs" v-bind:value="value" v-on="inputListeners">
    </label>
</template>

<script>
    export default {
        name: "baseInput",
        inheritAttrs:false,
        props:['label','value'],
        data(){
            return{
            }
        },
        computed:{
            inputListeners:function () {
                var vm = this
                // `Object.assign` 将所有的对象合并为一个新对象
                return Object.assign({},
                    // 我们从父级添加所有的监听器
                    this.$listeners,
                    //然后我们添加自定义监听器
                    //或覆写一些监听器的行为
                    {
                        //这里确保组件配合v-model的工作
                        input:function (event) {
                            vm.$emit('input',event.target.value)
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>