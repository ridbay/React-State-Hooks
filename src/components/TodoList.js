import React from 'react';


const TodoList = ({ dispatch, todos }) => (
    <ul>
        {todos.map(todo => (
            <TodoItem key={todo.id} dispatch={dispatch} todo={todo} />
        ))}
    </ul>
)

const TodoItem = ({ dispatch, todo }) => {
    const handleChange = () =>
        dispatch({
            type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
            id: todo.id,
        })
    return (
        <li>
            <input type='checkbox' checked={todo.complete} onChange={handleChange} />
            {todo.task}
        </li>
    )
}

export default TodoList;