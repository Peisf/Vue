<template>
    <div id="example">
        <div id="example-1">
            <button v-on:click="counter += 1">Add 1</button>
            <p>The button above has been clicked {{ counter }} times</p>
        </div>
        <div id="example-2">
            <button v-on:click="greet">Greet</button>
        </div>
        <div id="example-3">
            <button v-on:click="say('hi')">Say Hi</button>
            <button v-on:click="say('hello')">Say Hello</button>
            <button v-on:click="warn('Form cannot be submitted yet.',$event)">Submit</button>
        </div>
        <!--事件修饰符-->
        <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>

        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>

        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThat"></a>

        <!-- 只有修饰符 -->
        <form v-on:submit.prevent></form>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
        <div v-on:click.capture="doThis">...</div>

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat">...</div>

        <!-- 点击事件将只会触发一次 -->
        <a v-on:click.once="doThis"></a>

        <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
        <!-- 而不会等待 `onScroll` 完成  -->
        <!-- 这其中包含 `event.preventDefault()` 的情况 -->
        <div v-on:scroll.passive="onScroll">...</div>

        <!--按键修饰符-->
        <!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
        <input v-on:keyup.13="submit">
        <!--全部的按键别名-->
        <!--.enter
        .tab
        .delete (捕获“删除”和“退格”键)
        .esc
        .space
        .up
        .down
        .left
        .right-->
    </div>
</template>

<script>
    export default {
        name: "EventManage",
        data(){
            return{
                counter : 0,
                name:'vue.js'
            }
        },
        methods:{
            greet:function (event) {
                alert('Hello '+this.name + '!')
                if(event){
                    //alert(event.target.tagName)
                }
            },
            say:function (message) {
                alert(message)
            },
            warn:function (message,event) {
                if(event) event.preventDefault();
                alert(message);
            }
        }
    }
</script>

<style scoped>

</style>