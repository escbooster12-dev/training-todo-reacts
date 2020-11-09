import React, { useState, useEffect } from "react";

const Create = ({ todos }) => {

  return (
    <div className="border mb-3">
      <form>
        <div className="row">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-sm-4">
            <input
              type="time"
              className="form-control"
            />
            <input
              type="date"
              className="form-control"
            />
          </div>
          <div className="col-sm-4">
            <button>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
