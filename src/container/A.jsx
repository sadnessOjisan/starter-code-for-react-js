// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { actions as aActions } from "../redux/modules/A";
import { type State } from "../redux/modules/index";
import COLOR from "../constants/COLOR";

type StateProps = {|
  +onLoad: boolean
|};

type DispatchProps = {|
  +loadPage: typeof aActions.loadPage
|};

type Props = {| ...DispatchProps, ...StateProps |};

class A extends Component<Props> {
  componentDidMount() {
    const { loadPage } = this.props;
    setTimeout(loadPage, 1000);
  }

  render() {
    const { onLoad } = this.props;
    return <Text>{onLoad ? "AのLOADING完了" : "AをLOADING中"}</Text>;
  }
}

const mapStateToProps = (state: State): StateProps => ({
  onLoad: state.A.onLoad
});

const mapDispatchToProps = dispatch => ({
  loadPage: bindActionCreators(aActions.loadPage, dispatch)
});

const Text = styled.p`
  color: ${COLOR.danger};
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(A);
