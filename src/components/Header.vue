<template>
 <header>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="py-2" href="#" aria-label="Product">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
         </a>
         <a href="/" class="navbar-brand">Order Your Pizza</a>
         <ul class="navbar-nav">
             <!-- 在data里定义了变量homeLink -->
             <li><router-link :to="homeLink" class="nav-link">Home</router-link></li>
             <!-- 在rounte.js里定义了路由的名字memuLink -->
             <li><router-link :to="{name: 'menuLink'}" class="nav-link">Menu</router-link></li>
             <li><router-link :to="{name: 'adminLink'}" class="nav-link">Setting</router-link></li>
             <li><router-link :to="{name: 'aboutLink'}" class="nav-link">About</router-link></li>
         </ul>
         <ul class="navbar-nav ml-auto">
             <li><router-link :to="{name: 'loginLink'}" class="nav-link">Login</router-link></li>
             <li><router-link :to="{name: 'registerLink'}" class="nav-link">Sign-up</router-link></li>
         </ul>
     </nav>
 </header>
</template>

<script>
export default {
  data() {
    return {
      homeLink: '/'
    }
}
}
</script>

<style scoped>
</style>