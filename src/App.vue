<template>
  <div id="app">
    <div class="container">
      <Header/>
    </div>
    <!-- 主页面里默认渲染的一级路由 -->
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <!-- 主页面里默认渲染的二级路由，在router.js里配置name属性-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { Header },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
