
<template>
  <div>
    {{message}}
    <input v-model="message">
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p v-once>这个值不会改变:{{message}}</p>
    <span v-bind:title="message">
      啊啊啊啊啊啊啊啊啊啊
    </span>
    <p v-if="seen">看到了</p>
    <ol>
      <li v-for="todo in todos">
          {{todo.text}}
      </li>
    </ol>
    <button v-on:click="reverseMessage">逆转消息</button>

    <router-link :to="{path:'WatchExample'}">watchExample</router-link>
  </div>
</template>

<script>

export default{
  name: 'HelloWorld',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      seen:true,
      todos:[
        {id:0,text:'学习Javascript'},
        {id:1,text:'学习Vue'},
        {id:2,text:'整个牛项目'}
      ]
    }
  },
  computed:{
    reversedMessage:function(){
        return this.message.split('').reverse().join('')
    }
  },
  created: function () {
      // `this` 指向 vm 实例
      console.log('a is: ' + this.seen)
  },
  methods:{
      reverseMessage:function(){
          this.message = this.message.split('').reverse().join('')
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
