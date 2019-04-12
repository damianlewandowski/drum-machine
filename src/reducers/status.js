import { CHANGE_STATUS } from "../actions/types";

const initialState = {
  on: true
};

const status = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        on: !action.on
      };
    default:
      return state;
  }
};

export default status;
