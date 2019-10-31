import React, {useState, useReducer, createContext } from 'react';
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
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false,
  },
];

const TodoContext = createContext(null);

const App = () => {
 
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);





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
    <TodoContext.Provider value={dispatchTodos}>
     <Filter dispatch={dispatchFilter} />
     <TodoList dispatch={dispatchTodos} todos={filteredTodos}/>
     <AddTodo dispatch={dispatchTodos}/>
    </TodoContext.Provider>
  );
}

export default App;
