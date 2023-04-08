import { Button, List, Popconfirm, Switch, Tag, Tooltip } from "antd";
import { Todo } from "../../api/todos";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


interface ITodoItemProps {
    todo: Todo;
    onTodoRemoval: (todo: Todo) => void;
    onTodoToggle: (todo: Todo) => void;
  }
  
const TodoItem: React.FC<ITodoItemProps> = ({
    todo,
    onTodoRemoval,
    onTodoToggle,
  }) => {
    return (
      <List.Item
        actions={[
          <Tooltip
            title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={() => onTodoToggle(todo)}
              defaultChecked={todo.completed}
            />
          </Tooltip>,
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => {
              onTodoRemoval(todo);
            }}
          >
            <Button className="remove-todo-button" type="primary" danger>X</Button>
          </Popconfirm>,
        ]}
        className="list-item"
        key={todo.id}
      >
        <div className="todo-item">
          <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
            {todo.title}
          </Tag>
        </div>
      </List.Item>
    );
  };

export default TodoItem;
  