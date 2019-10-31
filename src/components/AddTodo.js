import React, { useState, useContext} from 'react';
import uuid from 'uuid/v4';
import {TodoContext} from '../App'



const AddTodo = () => {
    const dispatch = useContext(TodoContext);

    const [task, setTask] = useState('');
    const [task2, setTask2] = useState('');

    const handleSubmit = event => {
        if (task || task2) {
            dispatch({ type: 'ADD_TODO', task, task2, id: uuid() });
        }
        setTask('');
        setTask2('');
        event.preventDefault();
    };

    const handleChange = event => setTask(event.target.value);
    const handleChange2 = event => setTask2(event.target.value);
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={task} onChange={handleChange} />
            <input type='text' value={task2} onChange={handleChange2} />
            <button type='submit'>Add Todo</button>
        </form>

    )
}

export default AddTodo;