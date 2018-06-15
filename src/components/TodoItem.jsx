import React from "react";
import { connect } from "react-redux";

export function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          onChange={props.handleCheck}
          className="toggle"
          type="checkbox"
          checked={props.completed}
        />
        <label>{props.text}</label>
        <button className="destroy" onClick={props.handleDelete} />
      </div>
    </li>
  );
}
const mapStateToProps = state => ({todos: state.todos});
export default connect(mapStateToProps)(TodoItem);
