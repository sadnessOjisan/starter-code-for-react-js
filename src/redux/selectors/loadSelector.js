import { createSelector } from "reselect";
import type { Selector, OutputSelector } from "reselect";

const onLoadA = state => state.A.onLoad;

export const loadASelector: OutputSelector<
  Selector,
  boolean,
  boolean
> = createSelector(
  [onLoadA],
  (onLoad: boolean): Selector => (onLoad ? onLoad : onLoad)
);
