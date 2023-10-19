import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

interface Todo {
    id:string;
    text:string;
    date:string;
}
interface TodosState {
    todos: Todo[];
}
const initialState: TodosState = {
    todos: [],
};

const todoSlice = createSlice({
    name:'todoList',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{text:string, date:string}>) => {
          const newTodo: Todo = {
            id: v4(),
            text: action.payload.text,
            date:action.payload.date,
          };
          state.todos.push(newTodo);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
          state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
      },
});

export const todoListAction = todoSlice.actions;
export default todoSlice;