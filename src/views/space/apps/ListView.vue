<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const countStore = useCounterStore()
</script>

<template>
  <p>这里是AI应用列表</p>
  <p>{{ countStore.count }}</p>
  <router-link to="home">返回主页</router-link>
</template>

<style scoped></style>
