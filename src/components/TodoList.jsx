import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const textTodo = useSelector((state) => state.todolist.todos);

  return (
    <div>
      {textTodo.map((el) => (
        <TodoItem key={el.id} el={el} />
      ))}
    </div>
  );
};
