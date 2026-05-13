import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");

  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (!text.trim()) return;

    addTodo(text);

    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;