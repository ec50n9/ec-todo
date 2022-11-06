<template>
  <main>
    <EcHeader
      title="Todo"
      description="这里是一些你打算做，但是没有完成的事情"
    />
    <TodoList>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.title"
        :title="todo.title"
        :finished="todo.finished"
        @change-status="(newValue) => (todo.finished = newValue)"
      />
    </TodoList>
  </main>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import EcHeader from "../../components/EcHeader.vue";
import TodoItem from "./todo-item.vue";
import TodoList from "./todo-list.vue";

type Todo = {
  title: string;
  date: Date;
  duration: number;
  finished: boolean;
};

const todoList = reactive<Todo[]>([]);

for (let i = 0; i < 100; i++) {
  todoList.push({
    title: `这是第${i + 1}条待办`,
    date: new Date(),
    duration: 1000,
    finished: false,
  });
}
</script>
