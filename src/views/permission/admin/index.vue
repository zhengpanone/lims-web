<template>
    <el-col>
        <el-card class="search-toolbar">
            <template #header>
                <div class="card-header">
                    <span>数据筛选</span>
                </div>
            </template>
            <el-form :inline="true" ref="form" :model="listParams">
                <el-form-item label="状态" clearable>
                    <el-select placeholder="请选择状态" v-model="listParams.status">
                        <el-option label="全部" value="" />
                        <el-option label="启用" :value="1" />
                        <el-option label="禁用" :value="0" />
                    </el-select>

                </el-form-item>
                <el-form-item label="管理员名称">
                    <el-input placeholder="请输入管理员名称" v-model="listParams.name" />
                </el-form-item>
                <el-form-item>
                    <el-button native-type="submit" @click="handleQuery">查询</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card>
            <template #header>
                <div class="card-header">
                    <el-button type="primary">添加管理员</el-button>
                </div>
            </template>
            <el-table style="width: 100%" :data="list">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="realName" label="姓名" />
                <el-table-column prop="account" label="账号" width="180" />
            </el-table>
            <AppPagination v-model:page="listParams.page" v-model:limit="listParams.limit" :list-count="listCount"
                :load-list="loadList" />

        </el-card>
    </el-col>

</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { getAdmins } from '@/api/admin'
import type { IListParams, Admin } from '@/api/types/admin';
const list = ref<Admin[]>([]) // 列表数据
const listCount = ref(0)
const listParams = reactive({
    page: 1,
    limit: 10,
    name: '',
    roles: '',
    status: '' as IListParams['status']
})
const loadList = async () => {
    const data = await getAdmins(listParams)
    list.value = data.data.list
    listCount.value = data.data.total

}
const handleQuery = async () => {
    loadList()
}


onMounted(() => {
    loadList()
})
</script>
<style scoped>
.search-toolbar {
    margin-bottom: 20px;
}
</style>