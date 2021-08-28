<template>
 <div class="row mt-3">
     <div class="col md-12 lg-12">
         <div class="card">
             <div class="card-body">
                 <img src="../../src/assets/signup.png" alt="" class="mx-auto d-block">
                 <form @submit.prevent="onSubmit">
                     <div class="form-group">
                         <label for="email">Email</label>
                         <input type="email" class="form-control" v-model="email">
                     </div>
                     <div class="form-group">
                         <label for="password">Password</label>
                         <input type="password" class="form-control" v-model="password">
                     </div>
                     <button type="submit" class="btn btn-block btn-success">Login</button>
                 </form>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      // 先取得后台所有的数据放在users里
      axios.get('users.json')
      .then(res => {
        const data = res.data
        const users = []
        for(let key in data) {
          const user = data[key]
          users.push(user)
        }
        let result = users.filter((user) => {
          return user.email === this.email && user.password === this.password
        })
        if (result != null && result.length > 0) {
          this.$router.push({name: 'homeLink'})
        } else {
          alert("user doesn't exist")
        }
      })
    }
  }
}

</script>
<style>
</style>