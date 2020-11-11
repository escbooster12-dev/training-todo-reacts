import React, { useState, useEffect } from "react";

const useTodos = (params) => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
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

  const loadTodos = ({ data }) => {
    const newTodos = todos.slice(0);
    data.forEach(function (todo) {
      newTodos.push(todo);
    });

    setTodos(newTodos);
  };

  return [todos, loadTodos, addTodo, removeTodo, updateTodo];
};

export default useTodos;
