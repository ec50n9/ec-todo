import { defineStore } from "pinia";

type Todo = {
  title: string;
  date: Date;
  duration: number;
  finished: boolean;
};

export const useTodoStore = defineStore("todo", {
  persist: true,
  state: () => ({
    todoList: [] as Todo[],
  }),
});
