import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import todoAppReducer from "./reducer.js";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(todoAppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
registerServiceWorker();
