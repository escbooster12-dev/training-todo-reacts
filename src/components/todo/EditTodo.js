import React, { useState, useEffect } from "react";

import { http } from '../../api/http_service'
import { Button, Modal } from "react-bootstrap";

const EditTodo = ({ todo, todoEdited }) => {
  const [task, setTask] = useState("");
//   const [time, setTime] = useState("12:00:00");
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTask(todo.task_name);
  }, [todo]);

  const toUpdateTodo = async (event) => {
    event.preventDefault();

    try {
      let formData = new FormData();
      formData.append("task", task);
    //   formData.append("date", date);
    //   formData.append("time", time);
      formData.append("_method", 'PUT');

      const { data } = await http().post(`todo/${todo.task_id}`, formData);
      
      todoEdited(data);
      setShow(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Button variant="secondary" className="mr-2" onClick={() => setShow(true)}>
        Edit
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)}/>
            {/* <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)}/> */}
            {/* <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)}/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" onClick={toUpdateTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTodo;
