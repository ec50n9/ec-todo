<template>
  <li
    :class="['todo-item', finished ? 'todo-item--finished' : '']"
    py-3
    flex
    items-center
    gap-4
  >
    <EcCheckBox w-6 h-6 :checked="finished" @change="handleChangeStatus" />
    <p flex-grow-1>
      <span class="todo-item__title">{{ title }}</span>
    </p>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EcCheckBox from "../../components/EcCheckBox.vue";

const props = defineProps<{
  title: string;
  finished: boolean;
}>();
const emit = defineEmits(["changeStatus"]);

function handleChangeStatus(newValue: boolean) {
  emit("changeStatus", newValue);
}
</script>

<style>
.todo-item__title {
  position: relative;
  transition: color 0.3s ease;
}

.todo-item .todo-item__title::after {
  content: "";
  position: absolute;
  left: -4px;
  top: calc(50% - 1px);
  height: 2px;
  width: 0;
  background-color: #6b7280;
  transition: width 0.3s ease;
}

.todo-item--finished .todo-item__title {
  @apply text-gray-3;
}

.todo-item--finished .todo-item__title::after {
  width: calc(100% + 8px);
}
</style>
