import React, { Component } from "react";
import { connect } from "react-redux";
import VolumeSlider from "../components/VolumeSlider";
import { changeVolume } from "../actions/sound";

class VolumeSliderContainer extends Component {
  handleChange = e => {
    this.props.changeVolume(e.target.value);
  };
  render() {
    return (
      <VolumeSlider>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={this.props.volume}
          onChange={this.handleChange}
        />
        <span>{this.props.volume}</span>
      </VolumeSlider>
    );
  }
}

const mapStateToProps = state => ({
  volume: state.sound.volume
});

export default connect(
  mapStateToProps,
  { changeVolume }
)(VolumeSliderContainer);
