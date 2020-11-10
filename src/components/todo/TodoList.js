import React from 'react'

import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';

const TodoList = ({todos, todoEdited, todoRemoved}) => {

    const renderedTodos = todos.map((todo, index) => {
        return <li className="list-group-item" key={todo.task_id}>
            <div className="row">
                <div className="col-sm-7">{todo.task_name}</div>
                <div className="col-sm-5" align="right">
                    <CompleteTodo todo={todo} />
                    <EditTodo todo={todo} todoEdited={todoEdited} />
                    <DeleteTodo todo={todo} todoRemoved={todoRemoved}/>
                </div>

                <div className="col-sm-6">{todo.task_datetime}</div>
                <div className="col-sm-6" align="right"><span className="text-secondary">posted {todo.task_created_at_fmt}</span></div>
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
