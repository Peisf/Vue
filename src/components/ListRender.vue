<template>
    <div id="example">
        <ul id="example-1">
            <li v-for="(item,index) of items" :key="item.id">
                {{parentMessage}}--{{index}}--{{item.message}}
            </li>
        </ul>
        <ul id="example-2">
            <li v-for="(value,key,index) of object">
                {{index}}.{{key}}.{{value}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListRender",
        data(){
            return{
                parentMessage:'Parent',
                items:[
                    {id:0,message:'Foo'},
                    {id:1,message:'Bar'}
                ],
                object:{
                    firstName:'John',
                    lastName:'Doe',
                    age:30
                }
            }
        }
    }
</script>

<style>

</style>
