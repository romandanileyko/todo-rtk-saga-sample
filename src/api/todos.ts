import axios from 'axios';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/');
  return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const id = todo.id;
  const response = await axios.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,
  JSON.stringify(todo), 
  {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    }  
  }
  );
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
};
