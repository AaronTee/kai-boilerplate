import { PGRActions } from "./types";

export function increaseCounter() : PGRActions {
  return {
    type: 'INCREASE_COUNTER'
  }
}

export function decreaseCounter() : PGRActions {
  return {
    type: 'DECREASE_COUNTER'
  }
}

export function assignCounter(inputValue: number) : PGRActions {
  return {
    type: 'ASSIGN_COUNTER',
    payload: inputValue
  }
}