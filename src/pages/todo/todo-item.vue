<template>
  <li
    :class="['todo-item', todo.finished ? 'todo-item--finished' : '']"
    py-3
    flex
    items-center
    gap-4
  >
    <EcCheckBox
      w-6
      h-6
      :color="todoColors[todo.type]"
      :checked="todo.finished"
      @change="handleChangeStatus"
    />
    <p flex-grow-1>
      <span class="todo-item__title">{{ todo.title }}</span>
    </p>
    <Transition>
      <div
        v-if="canPlay"
        @click="handlePlayClick(todo.type)"
        class="play-btn i-akar-icons-play"
        w-6
        h-6
        :style="{ color: todoColors[todo.type] }"
      ></div>
    </Transition>
  </li>
</template>

<script setup lang="ts">
import { computed, inject, ref } from "vue";
import EcCheckBox from "../../components/EcCheckBox.vue";
import EcModal from "../../components/EcModal.vue";

const props = defineProps<{
  todo: Todo;
}>();
const emit = defineEmits(["changeStatus"]);

function handleChangeStatus(newValue: boolean) {
  emit("changeStatus", newValue);
}

const todoColors = {
  todo: "#1D4ED8",
  tomato: "#B91C1C",
  potato: "#B45309",
};

// 计时按钮
const showClockModal = inject<() => void>("showClockModal");
const playFuncList = {
  tomato: () => {
    console.log("hello, tomato");
    showClockModal && showClockModal();
  },
  potato: () => {
    console.log("hello, potato");
  },
};
const canPlay = computed(
  () => props.todo.type in playFuncList && !props.todo.finished
);
function handlePlayClick(todoType: TodoType) {
  playFuncList[todoType]();
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
  background-color: v-bind("todoColors[todo.type]");
  transition: width 0.3s ease;
}

.todo-item--finished .todo-item__title {
  @apply text-gray-3;
}

.todo-item--finished .todo-item__title::after {
  width: calc(100% + 8px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
