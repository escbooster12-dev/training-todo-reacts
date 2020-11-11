import React, { useState } from "react";
import useTodos from '../../hooks/useTodos'

import TodoList from "./TodoList";
import InfiniteScroll from "react-infinite-scroller";

import { http } from "../../api/http_service";

import { Spinner } from "react-bootstrap";

const OverduedTodos = (params) => {
  const [todos, loadTodos, removeTodo, updateTodo] = useTodos();
  const [hasMore, setHasMore] = useState(true);

  const fetchTodos = async (page) => {
    const { data } = await http().get(
      `todo?overdued=true&completed=false&page=${page}`
    );

    loadTodos(data);
    
    setHasMore(page < data.last_page-1);
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchTodos}
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

export default OverduedTodos;