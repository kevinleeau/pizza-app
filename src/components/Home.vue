<template>
 <div class="row">
     <div id="home" class="col-sm-12 text-center">
         <div class="background">
             <h1>Welcome to tasty pizza</h1>
             <h2>Find out your favorite one</h2>
             <button @click="toMenu" class="btn btn-primary">Let's order</button>
         </div>
     </div>     
 </div>
</template>

<script>
export default {
methods: {
    toMenu() {
        // this.$router.go(-1)
        // this.$router.replace('/menu')
        // this.$router.replace({name: 'menuLink'})
        // this.$router.push('/menu')
        this.$router.push({name: 'menuLink'})
    }
}
}

</script>
<style scoped>
#home {
  background: url('../../src/assets/pizza.jpg');
  height: 85vh;
  padding: 10%;
}
h1, h2 {
    color:rgb(241, 113, 113);
    margin: 6%;
}
.background {
    background: rgb(231, 222, 222);
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
}
</style>