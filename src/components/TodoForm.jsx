import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import styled from "styled-components";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ygytvhyv");

    if(nameValue.trim() === ""){
      return alert("name empty")
    }
    if(phoneValue.trim() === ""){
      return alert("phone empty")
    }

    dispatch(
      addTodo({
        name: nameValue,
        phone: phoneValue,
        date: dateValue,
        completed: false,
      })
    );
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <FormDiv>
          <TextFieldInput
            type="text"
            label="NAME"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <TextFieldInput
            type="number"
            label="PHONE NUMBER"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
          />
          <TextFieldInput
            type="date"
            label="DATE"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
          />
          <Button type="submit" variant="contained" color="success">
            add task
          </Button>
        </FormDiv>
      </Form>
    </Div>
  );
};


const Div = styled.div`
display: flex;
justify-content: center;

`

const Form = styled.form`
width: 600px;
border: 1px solid blue;
padding: 10px;
background-color: yellow;

`

const FormDiv = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`

const TextFieldInput = styled(TextField)`
  margin: 10px;
`