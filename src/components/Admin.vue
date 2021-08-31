<template>
 <div class="row">
   <div class="col-sm-12 col-md-8">
     <Addpizza/>
   </div>
   <div class="col-sm-12 col-md-4">
     <h3 class="text-muted my-5">Current Menu</h3>
     <table class="table">
       <thead class="table table-default">
         <tr>
           <th>Name</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody v-for="item in getMenuItems" :key="item.name">
         <tr>
           <td>{{item.name}}</td>
           <td>
             <!-- &times; ✖  ---->
             <button @click="deleteItem(item)" class="btn btn-inline-danger btn-sm">&times;</button>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
 </div>
</template>

<script>
import Addpizza from './Addpizza.vue'
export default {
  data() {
    return {
      // getMenuItems: []
    }
  },
  components: {
    Addpizza
  },
  computed: {
    // 在其它组件中调用并使用vuex的数据，在computed里定义方法，定义一个空set方法解决no setter问题
    getMenuItems: {
      get() {
        // return this.$store.state.menuItems

        // 或者通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      set() {}
    }
  },
  created() {
    fetch("https://pizza-app-4b021-default-rtdb.firebaseio.com/menu.json")
    .then(res => {
      return res.json()
    })
    .then(data => {
      let menuArray = []
      for(let key in data) {
        // data is object from firebase, data[key].id增加了一个属性叫ID，并把当前的key赋值给它
        data[key].id = key
        menuArray.push(data[key])
      }
      // this.getMenuItems = menuArray
      // 请求回来的数据要和vuex的数据进行同步跟新
      this.$store.commit('setMenuItems', menuArray)
    })
  },
  methods: {
    deleteItem(item) {
      fetch(`https://pizza-app-4b021-default-rtdb.firebaseio.com/menu/${item.id}/.json`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => { this.$store.commit('removeMenuItems', item)})
      .catch(err => err)
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