<template>
    <h1>首页</h1>
    <div>
        {{ userStore.name }}的年龄：{{ userStore.age }}<br />
        <button @click="addAge">点击给{{ userStore.name }}的年龄增加一岁</button>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const addAge = () => {
    userStore.updateAge(++userStore.age)
}
</script>
<style scoped>

</style>