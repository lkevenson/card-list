import * as types from "../types";

const initialState = {
  citizens: [],
  citizen: {},
  count: 0,
};
export const citizenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CITIZENS:
      return {
        ...state,
        citizens: action.payload.data,
        count: action.payload.count,
      };
    case types.GET_CITIZEN:
      return {
        ...state,
        citizen: action.payload.data,
      };

    default:
      return state;
  }
};
