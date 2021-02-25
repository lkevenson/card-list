import { combineReducers } from "redux";
import { citizenReducer } from "./citizen.reducer";

const reducers = combineReducers({
  inventory: citizenReducer,
});

export default reducers;
