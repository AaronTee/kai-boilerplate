import { Action, PayloadedAction } from 'common/interfaces/actions';
import { ActionCreatorsMapObject } from 'redux';
import * as Actions from './actions';

export interface PGRState {
  counter: number
}

interface IncreaseCounter extends Action<'INCREASE_COUNTER'> {}
interface DecreaseCounter extends Action<'DECREASE_COUNTER'> {}
interface AssignCounter extends PayloadedAction<'ASSIGN_COUNTER', number> {}

export type PGRActions = 
  IncreaseCounter
| DecreaseCounter
| AssignCounter;

export type IPGR = typeof Actions & PGRState;