// @flow

import type { Action } from "../../typedef/Action";

const LOAD_PAGE = "A/LOAD_PAGE";

export const types = {
  LOAD_PAGE
};

export type LoadPageAction = {|
  +type: typeof types.LOAD_PAGE
|};

export const actions = {
  loadPage: (): LoadPageAction => ({
    type: types.LOAD_PAGE
  })
};

export type State = {
  onLoad: boolean
};

const initialState: State = {
  onLoad: false
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.LOAD_PAGE:
      return { ...state, onLoad: true };
    default:
      return state;
  }
};

export default reducer;
