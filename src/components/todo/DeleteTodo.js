import React from "react";

import { http } from "../../api/http_service";

const DeleteTodo = ({ todo, todoRemoved }) => {
  const toDeleteTodo = async (params) => {
    if (window.confirm("Are you sure to proceed?")) {
      try {
        let formData = new FormData();
        formData.append("_method", "DELETE");

        const response = await http().post(`todo/${todo.task_id}`, formData);
        todoRemoved(todo.task_id);
      } catch (error) {
        alert("error occured");
      }
    }
  };

  return (
    <button className="btn btn-danger" onClick={toDeleteTodo}>
      Delete
    </button>
  );
};

export default DeleteTodo;
