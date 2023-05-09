import React from "react";
export default function Todo(props) {
    return (
    <li className="todo stack-small">
        <div className="c-cb">
          <label className="todo-label" htmlFor={props.id}>
            {props.name} {props.date} {props.time}
          </label>
          <button 
            type="button" 
            className="btn btn__danger"
            onClick={()=>props.deleteTask(props.id)}
          >
            Done
          </button>
        </div>
    </li>
    );
  }