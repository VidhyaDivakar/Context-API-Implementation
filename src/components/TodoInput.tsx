import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");

  const { addTodo } = useTodos();

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};
export default TodoInput;