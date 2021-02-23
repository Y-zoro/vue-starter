// 错误日志记录
const state = { logs: [1, 2, 3] }
const mutations = {
  add: (state, log) => {
    state.logs.push(log)
  },
  clear: (state) => {
    state.logs.splice(0)
  }
}
const actions = {
  add ({ commit }, log) {
    commit('add', log)
  },
  clear ({ commit }) {
    commit('clear')
  }
}
export default { namespaced: true, state, mutations, actions }
