<template>
 <form>
     <h3 class="text-muted my-5">Add new Pizza</h3>
     <div class="form-group row">
         <label class="col-sm-1">Name</label>
         <div class="col-sm-11">
             <input type="text" class="form-control" v-model="newPizza.name">
         </div>
     </div>
     <div class="form-group row">
         <label class="col-sm-1">Description</label>
         <div class="col-sm-11">
            <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
         </div>
     </div>
     <p><strong>Select 1</strong></p>
     <div class="form-group row">
         <label class="col-sm-1">Size</label>
         <div class="col-sm-11">
             <input type="text" class="form-control" v-model="newPizza.size1">
         </div>
     </div>
     <div class="form-group row">
         <label class="col-sm-1">Price</label>
         <div class="col-sm-11">
             <input type="text" class="form-control" v-model="newPizza.price1">
         </div>
     </div>
      <p><strong>Select 2</strong></p>
     <div class="form-group row">
         <label class="col-sm-1">Size</label>
         <div class="col-sm-11">
             <input type="text" class="form-control" v-model="newPizza.size2">
         </div>
     </div>
     <div class="form-group row">
         <label class="col-sm-1">Price</label>
         <div class="col-sm-11">
             <input type="text" class="form-control" v-model="newPizza.price2">
         </div>
     </div>
     <div class="form-group row">
         <button type="button" @click="addMenuItem" class="btn btn-success btn-block">Add</button>
     </div>
 </form>
</template>

<script>
export default {
  data() {
    return {
      newPizza: {}
    }
  },
  methods: {
    async addMenuItem() {
      let data = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [
          {
            size: this.newPizza.size1,
            price: this.newPizza.price1
          },
          {
            size: this.newPizza.size2,
            price: this.newPizza.price2
          }
        ]
      }
    //   fetch("https://pizza-app-4b021-default-rtdb.firebaseio.com/menu.json", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   .then(res => res.json())
    //   .then(data => this.$router.push({name: "menuLink"}))
    //   .catch(err => err)
    try {
      await this.http.post('menu.json', data)
      // this.$router.push({name: 'menuLink'})
      
      // 对vuex发出addMenuItems指令并携带数据过去
      this.$store.commit('addMenuItems', data)
    } catch (err) { return err }
    }
  }
}
</script>
<style>
</style>