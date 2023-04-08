import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../todos';

interface TodosState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchTodosFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteTodoItem: (state, action: PayloadAction<Todo>) => {
      state.isLoading = false
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
        )
    },
    deleteToDoFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateTodoItem: (state, action: PayloadAction<Todo>) => {
      state.isLoading = false
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index].completed = action.payload.completed
    },
    updateTodoFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  },
});

export const { 
  fetchTodosStart, 
  fetchTodosSuccess, 
  fetchTodosFailure,
  deleteTodoItem,
  deleteToDoFailure,
  updateTodoItem,
  updateTodoFailure
} = todosSlice.actions;

export default todosSlice.reducer;
