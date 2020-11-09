import React from 'react'

import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

const TodoList = ({todos, todoRemoved}) => {

    const renderedTodos = todos.map((todo, index) => {
        return <li className="list-group-item" key={todo.task_id}>
            <div className="row">
                <div className="col-sm-8">{todo.task_name}</div>
                <div className="col-sm-4" align="right">
                    <EditTodo todo={todo}/>
                    <DeleteTodo todo={todo} todoRemoved={todoRemoved}/>
                </div>

                <div className="col-sm-6">{todo.task_datetime_fmt}</div>
                <div className="col-sm-6" align="right">posted {todo.task_updated_at_fmt}</div>
            </div>
        </li>;
    });


    return (
        <div className="list-group">
            {renderedTodos}
        </div>
    );
}

export default TodoList;
