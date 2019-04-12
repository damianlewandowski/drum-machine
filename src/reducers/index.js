import { combineReducers } from "redux";
import sound from "./sound";
import status from "./status";

export default combineReducers({
  sound,
  status
});
