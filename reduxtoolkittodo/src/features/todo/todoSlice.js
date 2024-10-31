import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Add Your Stuffs Like this" }],
};

// Create a slice using createSlice from Redux Toolkit
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generates a unique ID for the new todo
        text: action.payload, // Takes the text of the new todo from the action payload
      };
      state.todos.push(todo); // Adds the new todo to the todos array in the state
    },
    removeTodo: (state, action) => {
      // Removes the todo with the specified ID from the todos array in the state
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export action creators for individual components
export const { addTodo, removeTodo } = todoSlice.actions;

// Export reducer for the Redux store
export default todoSlice.reducer;
