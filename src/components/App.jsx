import React, { Component } from "react";
import toDoList from "../todos.json";
import "../index.css";
import TodoList from "./TodoList.jsx";
import { Route, Switch, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: toDoList
    };
  }

  handleCheck = id => e => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(
        todo =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      )
    });
  };

  handleDelete = id => e => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  handleDeleteCompleted = e => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => !todo.completed)
    });
  };

  handlePress = e => {
    let updatedTodoList = this.state.todos.slice();
    let newTodo = {
      userId: 1,
      id: this.state.todos.length
        ? this.state.todos[this.state.todos.length - 1].id + 1
        : 1,
      title: e.target.value,
      completed: false
    };
    updatedTodoList.push(newTodo);
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState({
        todos: updatedTodoList
      });
      document.getElementById("text").value = "";
    }
  };
  render() {
    const active = this.state.todos.filter(todo => !todo.completed);
    const completed = this.state.todos.filter(todo => todo.completed);
    return (
      <section className="todoapp">
        <header className="header">
          <h1> todos </h1>
          <input
            id="text"
            onKeyPress={this.handlePress}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <TodoList
                {...props}
                todos={this.state.todos}
                handleCheck={this.handleCheck}
                handleDelete={this.handleDelete}
              />
            )}
          />
          <Route
            path="/active"
            render={props => (
              <TodoList
                {...props}
                todos={active}
                handleCheck={this.handleCheck}
                handleDelete={this.handleDelete}
              />
            )}
          />
          <Route
            path="/completed"
            render={props => (
              <TodoList
                {...props}
                todos={completed}
                handleCheck={this.handleCheck}
                handleDelete={this.handleDelete}
              />
            )}
          />
        </Switch>{" "}
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {" "}
              {this.state.todos.filter(todo => !todo.completed).length}{" "}
            </strong>{" "}
            item(s) left{" "}
          </span>{" "}
          <ul className="filters">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
          <button
            onClick={this.handleDeleteCompleted}
            className="clear-completed"
          >
            Clear completed{" "}
          </button>{" "}
        </footer>{" "}
      </section>
    );
  }
}

export default App;
