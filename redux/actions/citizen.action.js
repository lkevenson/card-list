import * as types from "../types";

export const fetchCitizens = ({ data, count }) => async (dispatch) => {
  dispatch({
    type: types.GET_CITIZENS,
    payload: { data, count },
  });
};

export const addCitizen = ({ data }) => async (dispatch) => {
  dispatch({
    type: types.GET_CITIZEN,
    payload: { data },
  });
};
