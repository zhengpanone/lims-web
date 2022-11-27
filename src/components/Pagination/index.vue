<template>
    <el-pagination :current-page="props.page" :page-size="props.limit" :page-sizes="[1, 2, 5, 10]" :total="listCount"
        :loadList="loadList" background layout="total,sizes,prev, pager, next,jumper"
        @current-change="handleCurrentChange" @size-change="handleSizeChange" />
</template>
<script lang="ts" setup>
const props = defineProps({
    page: { type: Number, defualt: 1 },
    limit: { type: Number, default: 1 },
    listCount: { type: Number, default: 0 },
    loadList: {
        type: Function,
        default: () => { }
    }
})

const emit = defineEmits(['update:page', 'update:limit'])
const handleCurrentChange = (page: number) => {
    emit('update:page', page)
    props.loadList()
}
const handleSizeChange = (size: number) => {
    emit('update:limit', size)
    emit('update:page', 1)
    props.loadList()
}
</script>
<style scoped>

</style>