import type { Todo } from "../types/todoTypes";

import { useTodos } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const {
    toggleTodo,
    deleteTodo,
  } = useTodos();

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          toggleTodo(todo.id)
        }
      />

      <span
        style={{
          textDecoration: todo.completed
            ? "line-through"
            : "none",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() =>
          deleteTodo(todo.id)
        }
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;