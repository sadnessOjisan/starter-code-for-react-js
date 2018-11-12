import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { actions as aActions } from "../redux/modules/A";
import COLOR from "../constants/COLOR";

class A extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadPage } = this.props;
    setTimeout(loadPage, 1000);
  }

  render() {
    const { onLoad } = this.props;
    return <Text>{onLoad ? "AのLOADING完了" : "AをLOADING中"}</Text>;
  }
}

const mapStateToProps = state => ({
  onLoad: state.A.onLoad
});

const mapDispatchToProps = dispatch => {
  return {
    loadPage: bindActionCreators(aActions.loadPage, dispatch)
  };
};

const Text = styled.p`
  color: ${COLOR.danger};
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(A);
