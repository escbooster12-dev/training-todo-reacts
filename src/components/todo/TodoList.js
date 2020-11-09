import React from 'react'

import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

const TodoList = ({todos, todoEdited, todoRemoved}) => {

    const renderedTodos = todos.map((todo, index) => {
        return <li className="list-group-item" key={todo.task_id}>
            <div className="row">
                <div className="col-sm-8">{todo.task_name}</div>
                <div className="col-sm-4" align="right">
                    <EditTodo todo={todo} todoEdited={todoEdited} />
                    <DeleteTodo todo={todo} todoRemoved={todoRemoved}/>
                </div>

                {/* <div className="col-sm-6">{todo.task_datetime_fmt}</div> */}
                <div className="col-sm-6"><span className="text-secondary">posted {todo.task_created_at_fmt}</span></div>
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
