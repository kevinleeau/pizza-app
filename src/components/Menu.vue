<template>
 <div class="row">
     <div class="col-sm-12 col-md-8">
         <table class="table">
             <thead class="thead-default">
                 <tr>
                     <th>Size</th>
                     <th>Price</th>
                     <th>Add to cart</th>
                 </tr>
             </thead>
             <tbody v-for="item in getMenuItems" :key="item.name">
                 <tr>
                     <td><strong>{{item.name}}</strong></td>
                 </tr>
                 <tr v-for="option in item.options" :key="option.size">
                     <td>{{option.size}}</td>
                     <td>{{option.price}}</td>
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
                     <th>quantity</th>
                     <th>name</th>
                     <th>price</th>
                 </tr>
             </thead>
             <tbody v-for="item in basket" :key="item.name">
                 <tr>
                     <td>
                         <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                         <span>{{item.quantity}}</span>
                         <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                     </td>
                     <td>{{item.name}}{{item.size}}</td>
                     <td>{{item.price * item.quantity}}</td>
                 </tr>
             </tbody>
         </table>
         <p>Total: </p>
         <button class="btn btn-success btn-block">Submit</button>
         </div>
         <div v-else>
             {{basketText}}
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      getMenuItems: {
        1: {
            'name': 'Durian Pizza',
            'description': 'good durian',
            'options': [{
                'size': '9 inch',
                'price': 10
            },
            {
                'size': '12 inch',
                'price': 15
            }]
        },
        2: {
            'name': 'Apple Pizza',
            'description': 'good durian',
            'options': [{
                'size': '9 inch',
                'price': 11
            },
            {
                'size': '12 inch',
                'price': 16
            }]
        },
        3: {
            'name': 'Orange Pizza',
            'description': 'good durian',
            'options': [{
                'size': '9 inch',
                'price': 12
            },
            {
                'size': '12 inch',
                'price': 17
            }]
        }
      },
      basket: [],
      basketText: 'Nothing in the cart'
    }
  },
  methods: {
    addToBasket(item, option) {
      this.basket.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      })
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