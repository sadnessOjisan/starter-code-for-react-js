import { createSelector } from 'reselect'
import { type State } from '../modules'

const onLoadA = (state: State) => state.A.onLoad

const loadASelector = createSelector(
  [onLoadA],
  onLoad => onLoad
)

export default loadASelector
