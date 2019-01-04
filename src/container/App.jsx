import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import A from "./A";
import B from "./B";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route path="/" component={A} exact />
        <Route path="/B" component={B} exact />
      </Switch>
    );
  }
}

export default App;
