import { createContext, useReducer, useContext, useEffect } from 'react';
import { Todo } from '../types';

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
//null is default value prior to provides is set
const TodoContext = createContext<any>(null)
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
        case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );