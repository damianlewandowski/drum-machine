import React, { Component } from "react";
import { connect } from "react-redux";
import SoundButtons from "../components/SoundButtons";
import SoundButton from "../components/SoundButton";
import { updateCurrentSound } from "../actions/sound";
import * as DRUMS from "../constants";
import sounds from "../sounds";

const drums = [
  { sound: DRUMS.CRASH, key: "q" },
  { sound: DRUMS.CRASH2, key: "w" },
  { sound: DRUMS.HAT, key: "e" },
  { sound: DRUMS.KICK, key: "a" },
  { sound: DRUMS.REVCRASH, key: "s" },
  { sound: DRUMS.RIDE, key: "d" },
  { sound: DRUMS.SDST, key: "z" },
  { sound: DRUMS.SNR, key: "x" },
  { sound: DRUMS.TOM, key: "c" }
];

class SoundButtonsContainer extends Component {
  state = {
    src: "",
    volume: 50
  };

  play = (sound, i) => {
    if (!this.props.on) {
      return;
    }

    this.props.updateCurrentSound(sound);
    console.log(DRUMS["CRASH"]);
    let src = sounds[DRUMS[sound]];

    this.setState(
      {
        src,
        activeIndex: i
      },
      () => {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.play();
      }
    );
  };
  x;

  componentDidMount() {
    this.audio = document.getElementById("audio");

    // Add event listeners
    document.addEventListener("keydown", e => {
      switch (e.code) {
        case "KeyQ":
          this.play(drums[0].sound, 0);
          break;
        case "KeyW":
          this.play(drums[1].sound, 1);
          break;
        case "KeyE":
          this.play(drums[2].sound, 2);
          break;
        case "KeyA":
          this.play(drums[3].sound, 3);
          break;
        case "KeyS":
          this.play(drums[4].sound, 4);
          break;
        case "KeyD":
          this.play(drums[5].sound, 5);
          break;
        case "KeyZ":
          this.play(drums[6].sound, 6);
          break;
        case "KeyX":
          this.play(drums[7].sound, 7);
          break;
        case "KeyC":
          this.play(drums[8].sound, 8);
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", e => {
      this.setState({
        activeIndex: null
      });
    });
  }

  handleChange = e => {
    this.setState({
      volume: e.target.value
    });
  };

  render() {
    return (
      <SoundButtons>
        {drums.map((d, i) => (
          <SoundButton
            key={i}
            onClick={() => this.play(d.sound)}
            isActive={this.state.activeIndex === i}
          >
            {d.key}
          </SoundButton>
        ))}
        <audio
          id="audio"
          src={this.state.src}
          volume={this.state.volume}
          onChange={this.handleChange}
        />
      </SoundButtons>
    );
  }
}

const mapStateToProps = state => ({
  on: state.status.on
});

export default connect(
  mapStateToProps,
  { updateCurrentSound }
)(SoundButtonsContainer);
