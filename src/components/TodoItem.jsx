import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";
import styled from "styled-components";
import PropTypes from "prop-types";

export const TodoItem = ({ el }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(el));
  };

  return (
    <Container>
      <p className={el.completed ? "completed" : ""} onClick={handleToggle}>
        {el.name}
      </p>
      <p>{el.phone}</p>
      <p>{el.date}</p>
      <div>
        <input type="checkbox" checked={el.completed} onChange={handleToggle} />
        <Button variant="outlined">edit</Button>
        <Button
          onClick={() => handleDelete(el.id)}
          variant="outlined"
          color="error"
        >
          delete
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  background-color: silver;
  margin: 10px 0;
  padding: 5px;
  width: 500px;

  p {
    cursor: pointer;
    color: ${({ completed }) => (completed ? "red" : "")};
  }
  .completed {
    text-decoration: line-through;
  }
`;

TodoItem.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
