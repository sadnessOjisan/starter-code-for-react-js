import React, { Component } from "react";
import { connect } from "react-redux";
import loadASelector from "../redux/selectors/loadSelector";
import Text from "../components/common/atoms/Text";

type Props = {
  onLoadA: boolean
};

class B extends Component<Props> {
  componentDidMount() {}

  render() {
    const { onLoadA } = this.props;
    return (
      <div>
        <Text.Default>
          Bですううううううううううううううううううううう
        </Text.Default>
        <Text.Default>
          ちなみにAは
          {onLoadA ? "LOADされてまーす" : "LOADされてませーん"}
        </Text.Default>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onLoadA: loadASelector(state)
});

export default connect(
  mapStateToProps,
  null
)(B);
