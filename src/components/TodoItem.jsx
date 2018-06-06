import React from "react";

function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        {props.completed ? (
          <input
            onChange={props.handleCheck}
            className="toggle"
            type="checkbox"
            defaultChecked
          />
        ) : (
          <input
            onChange={props.handleCheck}
            className="toggle"
            type="checkbox"
          />
        )}
        <label>{props.text}</label>
        <button className="destroy" onClick={props.handleDelete} />
      </div>
    </li>
  );
}

export default TodoItem;
