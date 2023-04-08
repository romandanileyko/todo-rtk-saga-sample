import { List } from "antd";
import { Todo } from "../../api/todos";
import TodoItem from "../todoitem/TodoItem";

interface ITodoListProps {
    todos: Todo[];
    onTodoRemoval: (todo: Todo) => void;
    onTodoToggle: (todo: Todo) => void;
  }

const TodoList: React.FC<ITodoListProps> = ({
    todos,
    onTodoRemoval,
    onTodoToggle,
  }) => (
    <List
      locale={{
        emptyText: "There's nothing to do :(",
      }}
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem
          todo={todo}
          onTodoToggle={onTodoToggle}
          onTodoRemoval={onTodoRemoval}
        />
      )}
      pagination={{
        position: 'bottom',
        pageSize: 10,
      }}
    />
  );

  export default TodoList;
  