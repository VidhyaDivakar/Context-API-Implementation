import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./context/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";

import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Todo App</h1>

      <ThemeToggleButton />

      <TodoInput />

      <FilterButtons />

      <TodoList />
    </div>
  );
}

export default App;