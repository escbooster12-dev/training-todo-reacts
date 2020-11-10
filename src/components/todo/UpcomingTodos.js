import React, { useState, useEffect } from "react";

import Create from "./CreateTodo";
import TodoList from "./TodoList";
import InfiniteScroll from "react-infinite-scroller";

import { http } from "../../api/http_service";

import { Spinner } from "react-bootstrap";

const UpcomingTodos = (params) => {
  const [todos, setTodos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const addNewTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.task_id !== todoId));
  };

  const updateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.task_id === updatedTodo.task_id) {
        return updatedTodo;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const loadTodos = async (page) => {
    const { data } = await http().get(
      `todo?overdued=false&completed=false&page=${page}`
    );

    const newTodos = todos.slice(0);
    Object.keys(data.data).forEach(function (key) {
      newTodos.push(data.data[key]);
    });

    setTodos(newTodos);
    setHasMore(page < data.last_page);
  };

  return (
    <>
      <Create todoAdded={addNewTodo} />

      <InfiniteScroll
        pageStart={0}
        loadMore={loadTodos}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
          </div>
        }
      >
        <TodoList
          todos={todos}
          todoRemoved={removeTodo}
          todoEdited={updateTodo}
        />
      </InfiniteScroll>
    </>
  );
};

export default UpcomingTodos;
