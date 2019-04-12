import React, { Component } from "react";
import { connect } from "react-redux";
import PowerButton from "../components/PowerButton";
import { updateCurrentStatus } from "../actions/status";

class PowerButtonContainer extends Component {
  render() {
    return (
      <PowerButton
        on={this.props.on}
        onClick={() => this.props.updateCurrentStatus(this.props.on)}
      />
    );
  }
}

const mapStateToProps = state => ({
  on: state.status.on
});

export default connect(
  mapStateToProps,
  { updateCurrentStatus }
)(PowerButtonContainer);
