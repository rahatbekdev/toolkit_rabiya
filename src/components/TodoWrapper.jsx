import styled from "styled-components";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoWrapper = () => {
  return (
    <Div>
      <TodoForm />
      <TodoList />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
