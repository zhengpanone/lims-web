<template>
    <div>登录</div>
</template>
<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { onMounted } from 'vue'

onMounted(() => {
    getLoginInfo().then(res => {
        console.log(res.data);

    })
})
</script>
<style scoped>

</style>