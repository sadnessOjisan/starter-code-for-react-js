import { combineReducers } from "redux";
import A from "./A";
import type { State as AState } from "./A";

export type State = {|
  +A: AState
|};

const rootReducer = combineReducers({
  A
});

export default rootReducer;
