import React, { useState, useReducer, createContext } from 'react';
import uuid from 'uuid/v4';
import './App.css';
import { filterReducer, todoReducer } from './redux/reducer';
import Filter from './components/Filter';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList'


const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    task2: 'Learn React2',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    task2: 'Learn Firebase2',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    task2: 'Learn GraphQL2',
    complete: false,
  },
];

export const DispatchContext = createContext(null);

const App = () => {

  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  //Global dispatch function
  const dispatch = action =>
    [dispatchTodos, dispatchFilter].forEach(fn => fn(action));

  // Global state

  const state = {
    filter,
    todos,
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true
    }
    return false;
  })


  return (
    <DispatchContext.Provider value={dispatch}>
      <Filter />
      <TodoList todos={filteredTodos} />
      <AddTodo />
    </DispatchContext.Provider>
  );
}

export default App;
