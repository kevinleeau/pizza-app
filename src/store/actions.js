//   异步应用操作mutations
export const setUser = ({commit}, user) => {
    commit('userStatus', user)
  }