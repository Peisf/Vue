<template>
    <div id="example">
        <!--<ul id="example-1">
            <li v-for="(item,index,id) of items" :key="item.id">
                {{parentMessage}}&#45;&#45;{{index}}&#45;&#45;{{item.message}}
            </li>
        </ul>-->
        <!--<ul id="example-2">
            <li v-for="(value,key,index) of object">
                {{index}}.{{key}}.{{value}}
            </li>
        </ul>-->
        <ul id="example-3">
            <li v-for="number of even(numbers)" :key="number.id">{{number}}</li>
        </ul>
        <ul id="example-5">
            <li v-for="number of numbers" :key="number.id" v-on:remove="numbers.splice(index,1)">
                {{number}}
                <button @click="remove">remove</button>
            </li>
        </ul>
        <!--<ul id="example-4">
            <template v-for="number of numbers">
                <li>{{number}}</li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>-->
        <input type="text" v-model="itemsSet">
        <button @click="setItems">添加</button>
    </div>
</template>

<script>
    export default {
        name: "ListRender",
        data(){
            return{
                parentMessage:'Parent',
                itemsSet:'',
                items:[
                    {id:0,message:'Foo'},
                    {id:1,message:'Bar'}
                ],
                object:{
                    firstName:'John',
                    lastName:'Doe',
                    age:30
                },
                numbers:[1,2,3,4,5]
            }
        },
        methods:{
            getDate(){
                return this.parentMessage = '改改了'
            },
            setItems:function (itemsSet,newItems,oldItems) {
                this.items.push({message:this.itemsSet});
            },
            even:function (numbers) {
                return numbers.filter(numbers => numbers % 2 === 0)
            }
        },
        mounted(){
            //this.getDate();
        }
    }
</script>

<style>

</style>
