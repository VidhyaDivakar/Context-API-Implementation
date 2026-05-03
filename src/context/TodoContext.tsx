import { createContext, useReducer, useContext, useEffect } from 'react';
import { Todo } from '../types';

type State = Todo [];

type Action = 
