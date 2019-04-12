import { CHANGE_STATUS } from "./types";

export const updateCurrentStatus = status => dispatch => {
  dispatch({
    type: CHANGE_STATUS,
    on: status
  });
};
