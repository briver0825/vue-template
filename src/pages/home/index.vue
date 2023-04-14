<script lang="ts" setup>
import { useCountStore } from '@/store/count';

const countStore = useCountStore()
</script>

<template>
  <div>
    This is Home Page.
    <div>Count: {{ countStore.count }}</div>
    <div><button @click="countStore.increment">add</button></div>
  </div>
</template>