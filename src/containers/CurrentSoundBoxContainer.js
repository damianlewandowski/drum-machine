import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentSoundBox from "../components/CurrentSoundBox";

class CurrentSoundBoxContainer extends Component {
  render() {
    return (
      <CurrentSoundBox>
        <p>{this.props.currentSound}</p>
      </CurrentSoundBox>
    );
  }
}

const mapStateToProps = state => ({
  currentSound: state.sound.sound
});

export default connect(mapStateToProps)(CurrentSoundBoxContainer);
