import { defineStore } from 'pinia'
import { ref } from 'vue'

const initAccount = {
  name: 'xiaobo',
  email: 'zhaoboqi77@163.com',
  avatar: '',
}
export const useAccountStore = defineStore('account', () => {
  const account = ref({ ...initAccount }) //{ ...initAccount }不会修改实际引用
  function update(params: any): void {
    Object.assign(account.value, params) //使用params去更新account，而且可以部分更新
  }

  function clear(): void {
    account.value = { ...initAccount }
  }

  //导出
  return { account, update, clear }
})
