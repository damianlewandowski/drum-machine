import { CHANGE_SOUND, CHANGE_VOLUME } from "./types";

export const updateCurrentSound = sound => dispatch => {
  dispatch({
    type: CHANGE_SOUND,
    sound
  });
};

export const changeVolume = volume => dispatch => {
  dispatch({
    type: CHANGE_VOLUME,
    volume
  });
};
