import React, { Component } from "react";
import "../index.css";
import TodoList from "./TodoList.jsx";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  markCompleted,
  addTodo,
  deleteTodo,
  clearCompleted
} from "../actions.js";

export class App extends Component {
  constructor(props) {
    super(props);
  };

  handleCheck = id => () => {
    this.props.dispatch(markCompleted(id));
  };

  handleDelete = id => () => {
    this.props.dispatch(deleteTodo(id));
  };

  handleDeleteCompleted = () => {
    this.props.dispatch(clearCompleted())
  };

  handlePress = e => {
    if (e.key === "Enter" && e.target.value !== ''){
    this.props.dispatch(addTodo(e.target.value))
    document.getElementById('text').value = '';
    };
  };
  
  render() {
    const active = this.props.todos.filter(todo => !todo.completed);
    const completed = this.props.todos.filter(todo => todo.completed);
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
                todos={this.props.todos}
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
              {this.props.todos.filter(todo => !todo.completed).length}{" "}
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
const mapStateToProps = state => ({todos: state.todos});
export default withRouter(connect(mapStateToProps)(App));
