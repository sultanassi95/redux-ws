import { GET_NAMES, SET_SEARCH } from "../actions";

const initialState = {
  names: [],
  loaders: {
    getNames: true
  },
  search: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NAMES: {
      return {
        ...state,
        names: payload,
        loaders: {
          getNames: false
        }
      };
    }

    case SET_SEARCH: {
      return {
        ...state,
        search: payload
      };
    }

    default:
      return state;
  }
};
