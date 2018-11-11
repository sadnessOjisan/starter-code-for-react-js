// @flow

import { createSelector } from "reselect";

const onLoadA = state => state.A.onLoad;

export const loadASelector = createSelector(
  [onLoadA],
  onLoad => (onLoad ? onLoad : onLoad)
);
