import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

const store = configureStore({
  reducer: {
    todolist: todoReducer,
  },
});

export default store;
