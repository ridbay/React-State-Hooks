import React, { useState, useReducer } from 'react';
import uuid from 'uuid/v4';
import './App.css';
import { filterReducer, todoReducer } from './redux/reducer';


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

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL' })
  }

  const handleShowComplete = () => {
    dispatchFilter({ type: 'SHOW_COMPLETE' })
  }

  const handleShowIncomplete = () => {
    dispatchFilter({ type: 'SHOW_INCOMPLETE' })
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
      <div>
        <button type='button' onClick={handleShowAll}>Show All</button>
        <button type='button' onClick={handleShowComplete}>Show Complete</button>
        <button type='button' onClick={handleShowIncomplete}>Show Incomplete</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input type='checkbox' checked={todo.complete} onChange={() => handleChangeCheckbox(todo)} />
            {todo.task}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' value={task} onChange={handleChangeInput} />
        <button type='submit'>Add Todo</button>
      </form>

    </div>
  );
}

export default App;
