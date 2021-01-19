<template>
<div class="hello-world">
<div>
<h1>{{msg}}</h1>
</div>
</div>
</template>

<script>
require('dotenv').config()
console.log(process.env.VUE_APP_API_URL)
const axios = require('axios')
export default {
name: 'HelloWorld',
          props: {
          },
mounted: function(){
    console.log('mounted')
            axios.get(process.env.VUE_APP_API_URL + '/api/v1/test',
                    {
headers: {
    'api-key': process.env.VUE_APP_API_KEY
}
                    })
                .then((response) => {
                    console.log(response)
                    this.msg = response.data.message
                    this.waiting = false
                        })
         },
data(){
    return {
        waiting: true,
        msg: "Waiting..."
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
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
