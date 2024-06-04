import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const TODO_URL = "https://crud-7053b-default-rtdb.firebaseio.com/";

export const getTodo = createAsyncThunk("list/getTodo", async () => {
  const response = await fetch(`${TODO_URL}/crud.json`);
  const data = await response.json();
  return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
});

export const addTodo = createAsyncThunk("list/addTodo", async (newText) => {
  const response = await fetch(`${TODO_URL}/list.json`, {
    method: "POST",
    body: JSON.stringify(newText),
  });
  const data = await response.json();
  return { id: data.name, ...newText };
});

export const deleteTodo = createAsyncThunk("list/deleteTodo", async (id) => {
  await fetch(`${TODO_URL}/list/${id}.json`, {
    method: "DELETE",
  });
  return id;
});

export const toggleTodo = createAsyncThunk("list/toggleTodo", async (todo) => {
  await fetch(`${TODO_URL}/list/${todo.id}.json`, {
    method: "PATCH",
    body: JSON.stringify({ completed: !todo.completed }),
  });
  return { ...todo, completed: !todo.completed };
});

const todoSlice = createSlice({
  name: "todotext",
  initialState: {
    todos: [],
    error: null,
    status: "abv",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.status = "pending status";
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.status = "sucsecc";
        state.todos = action.payload;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.status = "errrr";
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((el) => el.id !== action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      });
  },
});

export default todoSlice.reducer;
