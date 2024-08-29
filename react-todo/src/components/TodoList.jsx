import React from 'react'
import { useState } from 'react'
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
    const[todos, setTodos] = useState([
        {id: 1, text: 'Setup the Todo List Component'},
        {id: 2, text: 'Write Tests Using Jest and React Testing Library'},
        {id: 3, text: 'Run Tests'}
       
    ]);

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text: text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    const toggleTodo = (id) => {
        const updateTodos = todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo 
        );
        setTodos(updateTodos);
    };

    const deleteTodo = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos);
    }

    return(
        <div>
        <h1>Todo List</h1>
        <AddTodoForm addTodo={addTodo} />
        <ul>
            {todos.map(todo =>(
                <li key={todo.id}>

                <span style={{textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={()=>toggleTodo(todo.id)}>

                {todo.text}    
                </span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default TodoList;