import React, {useContext} from 'react';
import {TodoContext} from '../App'

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
)

const TodoItem = ({ todo }) => {
    const dispatch = useContext(TodoContext);
    const handleChange = () =>
        dispatch({
            type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
            id: todo.id,
        })
    return (
        <li>
            <input type='checkbox' checked={todo.complete} onChange={handleChange} />
            {todo.task} | {todo.task2}
        </li>
    )
}

export default TodoList;