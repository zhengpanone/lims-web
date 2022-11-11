<template>
    <el-container>
        <el-aside width="200px">
            <app-menu />
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <!-- 子路由出口 -->
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue';
</script>
<style scoped lang="scss">
.el-container {
    height: 100vh;

    .el-aside {
        background-color: #304156;
    }
}
</style>