<template>
 <div class="row">
     <div class="col-sm-12 col-md-8">
         <table class="table">
             <thead class="thead-default">
                 <tr>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Add to cart</th>
                 </tr>
             </thead>
             <tbody v-for="item in getMenuItems" :key="item.name">
                 <tr>
                     <td><strong>{{item.name}}</strong></td>
                 </tr>
                 <tr v-for="option in item.options" :key="option.size">
                     <td>{{option.size}} inch</td>
                     <td>$ {{option.price}}</td>
                     <td>
                         <!-- 点击取得当前的item和option -->
                        <button @click="addToBasket(item, option)" class="btn btn-sm btn-outline-success">+</button>
                     </td>
                 </tr>
             </tbody>
         </table>
     </div>
     <div class="col-md-4 col-sm-12">
         <div v-if="basket.length">
         <table class="table">
             <thead class="thead-default">
                 <tr>
                     <th>Quantity</th>
                     <th>Name</th>
                     <th>Price</th>
                 </tr>
             </thead>
             <tbody v-for="item in basket" :key="item.name">
                 <tr>
                     <td>
                         <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                         <span>{{item.quantity}}</span>
                         <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                     </td>
                     <td>{{item.name}} {{item.size}} inch</td>
                     <td>$ {{item.price * item.quantity}}</td>
                 </tr>
             </tbody>
         </table>
         <p>🛒 Total: {{'$' + total}} </p>
         <button class="btn btn-success btn-block">Submit Order</button>
         </div>
         <div v-else>
             {{basketText}}
         </div>
     </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      // getMenuItems: {},
      basket: [],
      basketText: '🛒 Nothing in the cart'
    }
  },
  created() {
    this.getData()
  },
  beforeRouteLeave: (to, from, next) => {
        if(confirm('You have not finish order, Discard?') == true) {
        next()
        } else {
          next(false)
           }
         },
  computed: {
    // 在本组件已经没有数据源，使用store里的数据，首先从vuex里获取数据
    // 流程： 在本组件created->methods中发请求，并通过$store.commit向vuex发出指令并携带请求回来的数据，然后在vuex的mutations接收并定义这个指令，从而对vuex的state的原始状态进行更新或保存，如果本组件需要使用数据，则在computed定义一个方法，在方法里通过$store.state获得vuex的数据
    getMenuItems() {
      // return this.$store.state.menuItems

      // 或者通过getters获取数据
      return this.$store.getters.getMenuItems
    },
    total() {
      let totalCount = 0
      for (let index in this.basket) {
        let item = this.basket[index]
        totalCount += item.quantity * item.price
      }
      return totalCount
    }
  },
  methods: {
    async getData() {
      //   fetch("https://pizza-app-4b021-default-rtdb.firebaseio.com/menu.json")
      //   .then(res => {
      //     return res.json()
      //   })
      //   .then(data => {
      //     this.getMenuItems = data
      //   })
      //   axios.get("menu.json")
      //   .then(res => this.getMenuItems = res.data)

      // *********************************
      // 将请求firebase回来的数据保存在vuex中，不再保存在本组件中
      try {
        const data = await this.http.get("menu.json")
        this.$store.commit("setMenuItems", data.data)
        // this.getMenuItems = data.data  
      } catch (err) { return err }
    },
    addToBasket(item, option) {
      let orderList = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }
      if (this.basket.length) {
        let result = this.basket.filter((orderList) => {
          return (orderList.name === item.name && orderList.price === option.price)
        })
        if (result != null && result.length > 0) {
            result[0].quantity++
        } else {
            this.basket.push(orderList)
        }
      } else {
        this.basket.push(orderList)
      }
    },
    decreaseQuantity(item) {
        item.quantity--
        if (item.quantity <= 0) {
            this.removeFromBasket(item)
        }
    },
    increaseQuantity(item) {
        item.quantity++
    },
    removeFromBasket(item) {
        this.basket.splice(this.basket.indexOf(item), 1)
    }
  }
}

</script>
<style>
</style>