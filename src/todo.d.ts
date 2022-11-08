type TodoType = "todo" | "tomato" | "potato";

type Todo = {
  type: TodoType;
  title: string;
  date: Date;
  duration: number;
  finished: boolean;
};
