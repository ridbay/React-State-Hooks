import React, { useState, useReducer } from 'react';
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


const App = () => {
  const [task, setTask] = useState('');
  // const [todos, setTodos] = useState(initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);



  const handleChangeInput = (event) => {
    setTask(event.target.value);

  }

  const handleSubmit = event => {
    if (task) {
      dispatchTodos({ type: 'ADD_TODO', task, id: uuid() });
    }
    setTask('');

    event.preventDefault();
  }

  const handleChangeCheckbox = todo => {
    dispatchTodos({
      type: todo.complete ? 'UNDO_TO' : 'DO_TODO',
      id: todo.id
    })
  }

  

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
    <div className="App">
     
    </div>
  );
}

export default App;
