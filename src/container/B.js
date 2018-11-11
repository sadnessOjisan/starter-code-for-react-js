import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadASelector } from "../redux/selectors/loadSelector";

class B extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onLoadA } = this.props;
    return (
      <div>
        <Text>Bですううううううううううううううううううううう</Text>
        <Text>
          ちなみにAは{onLoadA ? "LOADされてまーす" : "LOADされてませーん"}
        </Text>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onLoadA: loadASelector(state)
});

const Text = styled.p`
  color: red;
`;

export default connect(
  mapStateToProps,
  null
)(B);
