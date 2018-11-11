// @flow

import type { Action } from "../../typedef/Action";

type State = {
  onLoad: boolean
};

export const types = {
  LOAD_PAGE: "A/LOAD_PAGE"
};

export const actions = {
  loadPage: (): Action => ({
    type: types.LOAD_PAGE
  })
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
