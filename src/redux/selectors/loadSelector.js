// @flow

import {
  createSelector,
  type InputSelector,
  type OutputSelector,
} from 'reselect'
import { type TState } from '../modules'

const onLoadA: InputSelector<TState, mixed, boolean> = (state: TState) =>
  state.A.onLoad

const loadASelector: OutputSelector<TState, mixed, boolean> = createSelector(
  [onLoadA],
  onLoad => onLoad
)

export default loadASelector
