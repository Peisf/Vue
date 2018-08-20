<template>
  <div>This is Header Page.
  <p>{{firstName}}</p>
  <p>{{lastName}}</p>
  <p>{{fullName}}</p>
  <input v-model="fullName">

  </div>
</template>

<script>

export default{
    name:'header_nav',
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
