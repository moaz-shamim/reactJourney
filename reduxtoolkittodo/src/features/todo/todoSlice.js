import {createSlice , nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos :[{id:1 , text: "Add Your Stuffs Like this"}]
}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos  = state.todos.filter((todo)=>
                 todo.id !== action.payload
            )
        },
    }
})

// Export reducer for individual componenet
export const {addTodo,removeTodo} =  todoSlice.actions

// Export reducers for store.
export default todoSlice.reducer


