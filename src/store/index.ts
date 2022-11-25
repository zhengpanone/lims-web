import { defineStore, createPinia } from 'pinia'
import { IUserInfo } from '@/api/types/common'

const state = {
  count: 1,
  isCollapse: false,
  user: JSON.parse(
    window.localStorage.getItem('user') || 'null'
  ) as IUserInfo | null,
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
    setUser(user: IUserInfo) {
      this.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
  },

  getters: {},
})

const store = createPinia()

export default store
