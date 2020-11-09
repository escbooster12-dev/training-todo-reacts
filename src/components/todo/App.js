import React, { useState, useEffect } from 'react'

import Create from './Create'
import TodoList from './TodoList'

import { http } from '../../api/http_service'

const App = (params) => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async (params) => {
        const { data } = await http().get('todo');
        setTodos(data.data);
    }
    
    useEffect(() => {
        fetchTodos();
    }, []);

    const addNewTodo = (todo) => {
        setTodos([ todo, ...todos ]);
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo)=>(todo.task_id !== todoId)));
    }
    

    return (
        <div className="container mt-5">
            <Create todoAdded={addNewTodo} />
            <TodoList todos={todos} todoRemoved={removeTodo} />
        </div>
    );
}

export default App;
