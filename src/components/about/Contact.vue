<template>
 <div class="card text-dark bg-light mb-3">
     <div class="card-header">Contact Us</div>
     <div class="card-body">
         <h4 class="card-title">please contact us by...</h4>
         <p class="card-text">Good</p>
         <router-link :to="{name: 'phone'}">Phone</router-link>
         <router-link :to="{name: 'address'}">Address</router-link>
         <router-view></router-view>
     </div>
 </div>
</template>

<script>
export default {

}

</script>
<style>
</style>