<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <ul>
            <li
                    v-for="todo in todos"
                    v-bind:key="todo.id"
            >
                <!-- 我们为每个 todo 准备了一个插槽，-->
                <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
                <slot v-bind:todo="todo">
                    <!-- 回退的内容 -->
                    {{ todo.text }}
                </slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "todoList",
        data(){
            return{
                todos:[
                    {text:'1',name:'John'},
                    {text:'2',name:'Doe'},
                    {text:'3',name:'Jack'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>