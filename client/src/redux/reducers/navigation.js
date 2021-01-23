import { IS_OPEN } from "../types";

const initialState = {
  isOpen: false,
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };

    default:
      return state;
  }
};

export default navigation;
