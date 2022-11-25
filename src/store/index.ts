import { defineStore, createPinia } from 'pinia'
import { IUserInfo } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

const state = {
  count: 1,
  isCollapse: false,
  user: getItem<IUserInfo>(USER),
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
      setItem(USER, JSON.stringify(user))
    },
  },

  getters: {},
})

const store = createPinia()

export default store
