import { createContext, useReducer, useContext, useEffect } from 'react';
import type { Todo } from '../types/todoTypes';
import type { ReactNode } from "react";

type State = Todo [];

// using Typscript union type for actions with useReduces
// all the possible actions your app can perform and can be one of these action object.
type Action = 
| { type: 'ADD'; payload: string }
| { type: 'TOGGLE'; payload: string }
| { type: 'DELETE'; payload: string }
| { type: 'EDIT'; payload: {id: string; text: string } }
| { type: 'CLEAR_COMPLETED'};

//creating a global storage space (Context) for the Todo app. - “This is a shared place where todos and actions will live so any component can use them.”
//createContext() - creates shared state container; <any> disables typesafety 
//null is default value prior to pr`ovides is set
//const TodoContext = createContext<any>(null)
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  clearCompleted: () => void;
}

const TodoContext =
  createContext<TodoContextType | null>(null);
// Whenever an action happens, a Reducer function decides how the state should change. It cannot be reassigned later
// state -> current todos[]; action -> union type : add, or delete etc
// "State" - Return type, this function must return a new state (todo array)
const reducer = (state: State, action: Action): State => {
    // switch is like a multiple if else, for a single variable, many values can be given  
    switch (action.type) {
    case 'ADD':
          console.log("ADDING TODO:", action.payload);
      return [
        ...state,
        { id: Date.now().toString(), text: action.payload, completed: false }
      ];
        case 'TOGGLE': //“User wants to toggle (mark/unmark) a todo”
      return state.map(todo => // return a new state
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
         case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);

       case 'EDIT':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
         case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
         default:
      return state;
  }
};
// TodoProvider is the state container
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: State = JSON.parse(localStorage.getItem('todos') || '[]');

  const [todos, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => dispatch({ type: 'ADD', payload: text });
  const toggleTodo = (id: string) => dispatch({ type: 'TOGGLE', payload: id });
  const deleteTodo = (id: string) => dispatch({ type: 'DELETE', payload: id });
  const editTodo = (id: string, text: string) =>
    dispatch({ type: 'EDIT', payload: { id, text } });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "useTodos must be used within TodoProvider"
    );
  }

  return context;
};