<template>
  <main>
    <EcHeader
      title="Todo"
      description="这里是一些你打算做，但是没有完成的事情"
    />
    <TodoList>
      <TodoItem
        v-for="todo in todoStore.todoList"
        :key="todo.title"
        :title="todo.title"
        :finished="todo.finished"
        @change-status="(newValue) => (todo.finished = newValue)"
      />
    </TodoList>
  </main>
</template>

<script setup lang="ts">
import EcHeader from "../../components/EcHeader.vue";
import TodoItem from "./todo-item.vue";
import TodoList from "./todo-list.vue";
import { useTodoStore } from "../../store/TodoStore";

const todoStore = useTodoStore();
</script>
