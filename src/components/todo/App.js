import React, { useState, useEffect } from 'react'

import Create from './Create'
import TodoList from './TodoList'

import { http } from '../../api/http_service'

const App = (params) => {
    const [todos, setTodos] = useState([]);

    const getDatas = async (params) => {
        const { data } = await http().get('todo');
        setTodos(data.data);
    }
    
    useEffect(() => {
        getDatas();
    }, []);

    return (
        <div className="container mt-5">
            <Create />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
