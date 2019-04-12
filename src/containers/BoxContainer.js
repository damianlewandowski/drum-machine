import React, { Component } from "react";
import Box from "../components/Box";
import VolumeSlider from "../components/VolumeSlider";
import SoundButtonsContainer from "./SoundButtonsContainer";
import { connect } from "react-redux";
import CurrentSoundBoxContainer from "./CurrentSoundBoxContainer";
import PowerButtonContainer from "./PowerButtonContainer";
import VolumeSliderContainer from "./VolumeSliderContainer";

class BoxContainer extends Component {
  render() {
    return (
      <div>
        <Box>
          <SoundButtonsContainer />
          <PowerButtonContainer />
          <VolumeSliderContainer />
          <CurrentSoundBoxContainer />
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sound: state.sound
});

export default connect(mapStateToProps)(BoxContainer);
