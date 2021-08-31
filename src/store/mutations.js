    //   改变数据的状态
    // setMenuItems指令在Menu.vue中配置，并传递进了数据，在这里更新state
export const setMenuItems = (state, data) => {
      state.menuItems = data
    }
    // 接收其它组件传过来的指令，并根据index进行循环匹配删除state数据
export const removeMenuItems = (state, data) => {
      state.menuItems.forEach((item, index) => {
        if(item == data) {
          state.menuItems.splice(index, 1)
        }
      })
    }
    // 接收其它组件传递过来的指令
export const addMenuItems = (state, data) => {
      this.state.menuItems.push(data)
    }
export const userStatus = (state, user) => {
      if(user) {
        state.currentUser = user
        state.isLogin = true
      } else {
        state.isLogin = false
        state.currentUser = null
      }
    }