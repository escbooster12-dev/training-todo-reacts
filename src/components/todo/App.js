import React, { useState, useEffect } from "react";

import Create from "./Create";
import TodoList from "./TodoList";

import { http } from "../../api/http_service";

import InfiniteScroll from "react-infinite-scroller";

const App = (params) => {
  const [todos, setTodos] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
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
    const { data } = await http().get(`todo?page=${page}`);
      
    const newTodos = todos.slice(0);
    Object.keys(data.data).forEach(function (key) {
      newTodos.push(data.data[key]);
    });
    setTodos(newTodos);

    if (page >= data.last_page-1) {
      setHasMore(false);
    }
  };

  return (
    <div className="container mt-5">
      <Create todoAdded={addNewTodo} />

      <InfiniteScroll
        pageStart={0}
        loadMore={loadTodos}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <TodoList
          todos={todos}
          todoRemoved={removeTodo}
          todoEdited={updateTodo}
        />
      </InfiniteScroll>
    </div>
  );
};

export default App;
