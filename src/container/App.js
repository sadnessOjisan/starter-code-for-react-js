import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Text>hello world</Text>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
`;

const Text = styled.p`
  color: red;
`;

export default App;
