import React, { Component } from "react";
import styled from "styled-components";

class A extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Text>Bですううううううううううううううううううううう</Text>
    );
  }
}

const Text = styled.p`
  color: red;
`;

export default A;
