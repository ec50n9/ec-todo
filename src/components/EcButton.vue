<template>
  <button px-4 py-2 rounded-md select-none :class="additionClass[type]">
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  type: "default" | "primary" | "error";
};
const props = withDefaults(defineProps<Props>(), {
  type: "default",
});

const additionClass = {
  default: "text-gray-7 bg-gray-1",
  primary: "text-white bg-blue-6",
  error: "text-white bg-red-6",
};
</script>

<style scoped></style>
