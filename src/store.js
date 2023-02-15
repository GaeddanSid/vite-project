import { createStore } from 'vuex'

const mutations = {
  setSavedExcuses(state, value) {
    state.savedExcuses = value
  }
}
const state = {
  savedExcuses: null
}

const actions = {
  setSavedExcuses({ commit }, value) {
    commit('setSavedExcuses', value)
  }
}

export default createStore({ mutations, state, actions, strict: true })
