import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./container/App";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
