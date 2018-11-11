import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import A from "./A";
import B from "./B";

class App extends Component {
  constructor(props) {
    super(props);
  }

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
