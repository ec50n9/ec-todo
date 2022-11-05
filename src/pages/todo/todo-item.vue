<template>
  <li py-3>{{ title }}</li>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
