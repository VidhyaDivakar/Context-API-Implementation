import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;