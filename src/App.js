import React, { useState } from 'react';
import uuid from 'uuid/v4';
import './App.css';


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
  const [todos, setTodos] = useState(initialTodos)
  const handleChangeInput = (event) => {
    setTask(event.target.value);

  }

  const handleSubmit = event => {
    if (task) {
      console.log('todos', ...todos)
      setTodos(todos.concat({ id: uuid(), task, complete: false }))
    }
    setTask('');

    event.preventDefault();
  }

  const handleChangeCheckbox = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete }
      } else {
        return todo;
      }
    }))
  }

  const handleShowAll =() =>{

  }

  const handleShowComplete = () => {

  }

  const handleShowIncomplete = () =>{

  }
  return (
    <div className="App">
      <div>
        <button type='button' onClick={handleShowAll}>Show All</button>
        <button type='button' onClick={handleShowComplete}>Show Complete</button>
        <button type='button' onClick={handleShowIncomplete}>Show Incomplete</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type='checkbox' checked={todo.complete} onChange={() => handleChangeCheckbox(todo.id)} />
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
