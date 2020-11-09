import React, { useState, useEffect } from "react";

import Create from "./Create";
import TodoList from "./TodoList";

import { http } from "../../api/http_service";

import InfiniteScroll from "react-infinite-scroller";

const App = (params) => {
  const [todos, setTodos] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  const fetchTodos = async (params) => {
    const { data } = await http().get("todo");

    setTodos(data.data);
    setMaxPage(data.last_page);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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

  const loadFunc = async (page) => {
    if (page <= maxPage) {
      const { data } = await http().get(`todo?page=${page}`);
      const newTodos = todos;
      Object.keys(data.data).forEach(function (key) {
        newTodos.push(data.data[key]);
      });
      setTodos([...todos, newTodos]);
    } else return;
  };

  return (
    <div className="container mt-5">
      <Create todoAdded={addNewTodo} />

      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
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
