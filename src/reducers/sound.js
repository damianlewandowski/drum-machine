import { CHANGE_SOUND, CHANGE_VOLUME } from "../actions/types";

const initialState = {
  sound: "",
  volume: 50
};

const sound = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SOUND:
      return {
        ...state,
        sound: action.sound
      };
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume
      };
    default:
      return state;
  }
};

export default sound;
