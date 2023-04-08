import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { fetchTodosStart, deleteTodoItem, updateTodoItem } from './api/features/todosSlice';
import './App.css';
import { Card } from 'antd';
import TodoList from './components/todolist/TodoList';
import { Todo } from './api/todos';

type DemoProps = {
  children: React.ReactNode;
};

function Demo(props: DemoProps) {
  return <h1>{props.children}</h1>;
}

const  App: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state: RootState) => state.todos);
  const[complite, setComplite] = useState<boolean>();

  useEffect(() => {
    dispatch(fetchTodosStart());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  function handleRemoveTodo(todo: Todo): void {
    dispatch(deleteTodoItem(todo))
  }

  function handleToggleTodoStatus(todo: Todo): void {
    setComplite(todo.completed);
    let isCompleate = todo.completed? false: true;
    todo = {...todo, completed: isCompleate}
    dispatch(updateTodoItem(todo))
  }

  return (
    <Demo>
        <div className="App">
      <h1>Todos</h1>
      <div>
      <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
          />
        </Card>
      </div>
    </div>
    </Demo>
  );
}

export default App;
