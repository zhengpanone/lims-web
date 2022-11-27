<template>
  <el-dialog
    ref="dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="50%">
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button type="primary" @click="emit('confirm')"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { IElDialog } from '@/types/element-plus'

interface EmitsType {
  (e: 'confirm'): void
}
const emit = defineEmits<EmitsType>()

const dialog = ref<IElDialog | null>(null)
// 操作组件实例的visible属性
const handleCancel = () => {
  if (dialog.value) {
    dialog.value.visible = false
  }
}
</script>
<style scoped></style>
