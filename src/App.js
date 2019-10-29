import React, {useState} from 'react';
import './App.css';


const initialTodos = [
  {
    id: 'a',
    task: 'Learn React',
    complete: true,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: 'c',
    task: 'Learn GraphQL',
    complete: false,
  },
];


const App = () => {
  const [task, setTask] = useState('');
  const handleChangeInput = (event) => {

  }
  return (
    <div className="App">
      <ul>
        {initialTodos.map(todo => (
          <li key={todo.id}>
            <lable>{todo.task}</lable>
          </li>
        ))}
      </ul>
      <input type='text' value={task} onChange={handleChangeInput} />
    </div>
  );
}

export default App;
