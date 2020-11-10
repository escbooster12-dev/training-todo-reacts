import React, { useState } from "react";

import { http } from "../../api/http_service";

const CompleteTodo = ({ todo }) => {
  const [completed, setCompleted] = useState({
    flag: todo.task_completed,
    text: todo.task_completed ? "Undo Complete" : "Complete",
  });

  const toggleComplete = async (params) => {
    try {
      let formData = new FormData();
      formData.append("_method", "PUT");

      await http().post(`todo/completed/${todo.task_id}`, formData);

      setCompleted({
        flag: !completed.flag,
        text: completed.flag ? "Complete" : "Undo Complete",
      });
    } catch (error) {
      alert("Error occured");
      console.log(error);
    }
  };

  return (
    <>
      <button
        className={`btn border ${
          completed.flag ? "btn-default" : "btn-warning"
        } mr-2`}
        onClick={toggleComplete}
      >
        {completed.text}
      </button>
    </>
  );
};

export default CompleteTodo;
