<template>
    <div>登录</div>
</template>
<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
    getLoginInfo().then(res => {
        console.log(res.data);
        list.value = res.data.slide
    })
})
</script>
<style scoped>

</style>