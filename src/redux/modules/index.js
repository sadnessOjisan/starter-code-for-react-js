// @flow

import { combineReducers, type Reducer } from 'redux'
import A from './A'
import { type State as AState, type Action as AAction } from './A'

export type TState = {|
  +A: AState,
|}

export type TAction = AAction

const rootReducer: Reducer<TState, TAction> = combineReducers({
  // Q: どうしてここ型推論が必要？
  A,
})

export default rootReducer
