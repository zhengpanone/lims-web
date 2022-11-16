import { defineStore, createPinia } from 'pinia'

const state = {
  count: 1,
  isCollapse: false,
}

export type State = typeof state

export const indexStore = defineStore('index', {
  state: () => {
    return state
  },
  actions: {
    setIsCollapse(payload: boolean) {
      this.isCollapse = payload
    },
  },

  getters: {},
})

const store = createPinia()

export default store
