import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  persist: true,
  state: () => ({
    todoList: [] as Todo[],
  }),
  actions: {
    addTodo(todo: Todo) {
      // this.todoList.push(todo);
      this.todoList.unshift(todo);
    },
  },
});
