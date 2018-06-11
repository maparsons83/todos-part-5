import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import todoAppReducer from "./reducer.js"
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(todoAppReducer);
const mapStateToProps = state => ({todos: state.todos});
export default connect(mapStateToProps)(App);


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
registerServiceWorker();
