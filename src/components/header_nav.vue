<template>
    <div v-if="isShow" >This is Header Page.
        <p>{{firstName}}</p>
        <p>{{lastName}}</p>
        <p>{{fullName}}</p>
        <p>{{title}}</p>
        <input v-model="fullName">
        <button @click="$emit('enlarge-text',0.1)">Enlarge text</button>
    </div>
</template>

<script>

    export default{
        name:'header_nav',
        props:['title','isShow'],
        data() {
            return{
                firstName:'ssss',
                lastName:'bbbb'
            }
        },
        computed:{
            fullName: {
                // getter
                get: function () {
                    return this.firstName + ' ' + this.lastName
                },
                // setter
                set: function (newValue) {
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length - 1]
                    console.log(names)
                    console.log(this.firstName)
                    console.log(this.lastName)
                }
            }
        }
    }
</script>
