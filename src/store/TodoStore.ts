import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  persist: true,
  state: () => ({
    todoList: [
      {
        title: "吃早餐",
        date: new Date(),
        duration: 100,
        finished: false,
      },
    ] as Todo[],
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todoList.push(todo);
    },
  },
});
