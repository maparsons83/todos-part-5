import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.title}
            completed={todo.completed}
            handleCheck={props.handleCheck(todo.id)}
            handleDelete={props.handleDelete(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
