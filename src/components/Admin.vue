<template>
 <div>Admin</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'abc'
    }
  }
// 在进入本组件路由之前do something，用回调函数调用本组件内的数据
// beforeRouteEnter: (to, from, next) => {
//     next(x => { alert('Hi' + '  ' + x.name) })
// },
// 或者在离开本组件之前do something
  // beforeRouteLeave: (to, from, next) => {
  //  if(confirm('Leave page?') == true) {
  //   next()
  //  } else {
  //   next(false)
  //  }
  // }
}

</script>
<style>
</style>