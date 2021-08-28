<template>
 <div>
     <!-- margin-bottom -->
     <div class="row mb-5">
         <!-- 导航 -->
         <div class="col-4">
             <div class="list-group mb-5">
                 <router-link tag="li" class="nav-link" :to="{name: 'historyLink'}">
                     <a class="list-group-item list-group-item-action">Order tracking</a>
                 </router-link>
                 <router-link tag="li" class="nav-link" :to="{name: 'contactLink'}">
                     <a class="list-group-item list-group-item-action">Contact us</a>
                 </router-link>
                 <router-link tag="li" class="nav-link" :to="{name: 'orderingGuideLink'}">
                     <a class="list-group-item list-group-item-action">How it work</a>
                 </router-link>
                 <router-link tag="li" class="nav-link" :to="{name: 'deliveryLink'}">
                     <a class="list-group-item list-group-item-action">Order status</a>
                 </router-link>
             </div>
         </div>
         <!-- 导航对应的内容 -->
         <div class="col-8">
             <router-view></router-view>
         </div>
     </div>
 </div>
</template>

<script>
export default {

}

</script>
<style>
</style>