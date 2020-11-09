import React, { useState, useEffect } from "react";

import { http } from "../../api/http_service";

const Create = ({ todoAdded }) => {
  const [task, setTask] = useState("");
  // const [time, setTime] = useState("12:00:00");
  // const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = new FormData();
      formData.append("task", task);
      // formData.append("date", date);
      // formData.append("time", time);

      const { data } = await http().post("todo", formData);
      
      setTask('');
      todoAdded(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="border mb-3 p-2">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Add new task here..."
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>
          {/* <div className="col-sm-4">
            <input
              type="time"
              className="form-control"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div> */}
          <div className="col" align="right">
            <button className="btn btn-success mt-2" align="right">Add new task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
