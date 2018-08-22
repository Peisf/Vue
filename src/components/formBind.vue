<template>
    <div id="example">
        <div class="col"></div>
        <div id="example-1">
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{checked}}</label>
        </div>
        <div id="example-2">
            <input type="checkbox" id="Jack" value="Jack" v-model="CheckedName">
            <label for="Jack">Jack</label>
            <input type="checkbox" id="john" value="john" v-model="CheckedName">
            <label for="john">john</label>
            <input type="checkbox" id="doe" value="doe" v-model="CheckedName">
            <label for="doe">doe</label>
            <span>Check Name: {{ CheckedName }}</span>
        </div>
        <div id="example-3">
            <input type="radio" id="one" value="one" v-model="picked">
            <label for="one">one</label>
            <input type="radio" id="two" value="two" v-model="picked">
            <label for="two">two</label>
            <span>Radio Name: {{ picked }}</span>
        </div>
        <div id="example-4">
            <!--multiple 允许select多选 -->
            <select name="selected" id="selected" v-model="selected"  multiple >
                <option disabled value="">请选择</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <span>请选择{{selected}}</span>
        </div>
        <div id="example-5">
            <select v-model="selected2">
                <option disabled value="">请选择</option>
                <option v-for="option of options" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
            <span>请选择{{selected2}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "formBind",
        data(){
            return{
                checked:false,
                CheckedName:[],
                picked:'',
                selected:[],
                selected2:'',
                options:[
                    {text:'one',value:'A'},
                    {text:'two',value:'B'},
                    {text:'three',value:'C'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>